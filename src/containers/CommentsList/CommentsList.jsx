import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ItemsList from '../../components/ItemsList';
import * as commentActions from '../../actions/commentActions';


export class CommentsList extends React.Component {
  static propTypes = {
    comments: PropTypes.array,
    isLoading: PropTypes.number,
  }

  static defaultProps = {
    comments: [],
    isLoading: 0,
  }

  componentWillMount() {
    this.props.getAllComments();
  }

  render() {
    const {
      comments,
      isLoading,
    } = this.props;

    if (isLoading) {
      return (<div>Loading...</div>);
    }
    return (<ItemsList items={comments} />);
  }
}

const mapStateToProps = ({ comments, isLoading }) => ({
  isLoading: isLoading.comments,
  comments,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getAllComments: commentActions.getAllComments,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
