import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ItemsList from '../../components/ItemsList';
import CommentInput from '../../components/CommentInput';
import * as commentActions from '../../actions/commentActions';
import styles from './CommentsList.scss';

const EMPTY_TEXT_ERROR = 'The comment must habe at least 1 character.';
const MISSING_RATING_ERROR = 'You should rate this product.';

export class CommentsList extends React.Component {
  state = {
    currentComment: '',
    currentRating: 0,
   };

  static propTypes = {
    comments: PropTypes.array,
    isLoading: PropTypes.number,
  }

  static defaultProps = {
    comments: [],
    isLoading: 0,
  }

  onCommentChange = (e) => {
    this.setState({ currentComment: e.target.value });
  }

  onRatingChange = (value) => {
    this.setState({ currentRating: value });
  }

  onSubmitButtonClick = (e) => {
    const {
      props: {
        addComment,
      },
      state: {
        currentComment,
        currentRating,
      },
    } = this;
    if (!currentComment.length) {
      this.setState({ error: EMPTY_TEXT_ERROR });
      return;
    } else if (!currentRating) {
      this.setState({ error: MISSING_RATING_ERROR });
      return;
    }

    addComment(currentComment, currentRating);
    this.setState({
      currentComment: '',
      currentRating: 0,
    });
  }

  onResetButtonClick = (e) => {
    this.props.clearComments();
  }

  componentWillMount() {
    this.props.getAllComments();
  }

  render() {
    const {
      props: {
        comments,
        isLoading,
        defaultCleared,
      },
      state: {
        currentComment,
        currentRating,
        error,
      },
      onCommentChange,
      onRatingChange,
      onResetButtonClick,
      onSubmitButtonClick,
    } = this;

    const disabled = defaultCleared ? `${styles.disabled}` : '';

    const resetButton = (<button
        className={`${styles.resetButton} ${disabled}`}
        type="submit" onClick={onResetButtonClick}>
        Clear default comments
      </button>
    );

    if (isLoading) {
      return (<div>Loading...</div>);
    }
    return (
      <div className={styles.list}>
        <CommentInput
          currentRating={currentRating}
          onCommentChange={onCommentChange}
          onRatingChange={onRatingChange}
          onClick={onSubmitButtonClick}
          currentComment={currentComment}
          error={error}
        />
        {resetButton}
        <ItemsList items={comments} />
      </div>
    );
  }
}

const mapStateToProps = ({ comments, isLoading, reset }) => ({
  isLoading: isLoading.comments,
  comments: comments,
  defaultCleared: reset,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getAllComments: commentActions.getAllComments,
    addComment: commentActions.addComment,
    clearComments: commentActions.clearComments,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
