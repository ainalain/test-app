import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../actions/productActions';
import CommentsList from '../CommentsList';
import Card from '../../components/Card';
import styles from './ProductPage.scss';

export class ProductPage extends Component {
  //TODO: check static in babel, got error in bunding process
  // static defaultProps = {
  //   isLoading: false,
  //   productId: 'classic-gelato',
  // }
  //
  // static propTypes = {
  //   isLoading: PropTypes.number,
  //   productId: PropTypes.string,
  //   product: PropTypes.object,
  // }

  componentWillMount() {
    const {
      productId,
      getProduct,
    } = this.props;
    getProduct(productId);
  }

  render() {
    const {
      isLoading,
      product,
    } = this.props;

    return !isLoading && (<div className={styles.home}>
      <Card product={product} />
      <CommentsList />
    </div>);
  }
}
ProductPage.defaultProps = {
  isLoading: true,
  productId: 'classic-gelato',
};

ProductPage.propTypes = {
  isLoading: PropTypes.number,
  productId: PropTypes.string,
  product: PropTypes.object,
};

const mapStateToProps = ({ product, isLoading }) => ({
  isLoading,
  product,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getProduct: productActions.getProduct,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
