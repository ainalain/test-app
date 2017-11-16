import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../actions/productActions';
import CommentsList from '../CommentsList';
import Card from '../../components/Card';
import styles from './ProductPage.scss';

export class ProductPage extends Component {
  static defaultProps = {
    isLoading: 0,
    productId: 'classic-gelato',
  }

  static propTypes = {
    isLoading: PropTypes.number,
    productId: PropTypes.string,
    product: PropTypes.object,
  }

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

    if (isLoading) {
      return (<div>Loading...</div>);
    }

    return !isLoading && (<div className={styles.page}>
      <Card product={product} />
      <CommentsList />
    </div>);
  }
}

const mapStateToProps = ({ product, isLoading }) => ({
  isLoading: isLoading.product,
  product,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getProduct: productActions.getProduct,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
