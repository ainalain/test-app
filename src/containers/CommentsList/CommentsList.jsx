import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ItemsList from '../../components/ItemsList';


export class CommentsList extends React.Component {
  static propTypes = {
    comments: PropTypes.array,
    isLoading: PropTypes.number, // eslint-disable-line
  };

  static defaultProps = {
    comments: [],
    isLoading: false,
  };

  componentWillReceiveProps(nextProps) {
  //TODO: don't know yet if this method is necessary
  }

  render() {
    const {
      comments,
      isLoading,
    } = this.props;

    if (isLoading) {
      return (<div>Loading...</div>);
    }
    return (<ItemsList comments={comments} />);
  }
}

const mapStateToProps = ({ comments, isLoading }) => ({
  comments,
  isLoading,
});

export default connect(mapStateToProps)(CommentsList);
