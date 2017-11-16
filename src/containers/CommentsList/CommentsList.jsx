import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ItemsList from '../../components/ItemsList';
import * as commentActions from '../../actions/commentActions';
import styles from './CommentsList.scss';


export class CommentsList extends React.Component {
  state = { currentComment: '' };

  static propTypes = {
    comments: PropTypes.array,
    isLoading: PropTypes.number,
  }

  static defaultProps = {
    comments: [],
    isLoading: 0,
  }

  onChange = (e) => {
    this.setState({ currentComment: e.target.value });
  }

  onClick = (e) => {
    const {
      props: {
        addComment,
      },
      state: {
        currentComment,
      },
    } = this;
    if (!currentComment.length) {
      return;
    }

    addComment(currentComment);
  }

  componentWillMount() {
    this.props.getAllComments();
  }

  render() {
    const {
      props: {
        comments,
        isLoading,
      },
      state: {
        currentComment,
      },
      onChange,
      onClick,
    } = this;

    const button = (<button
        className={styles.button}
        type="submit" onClick={onClick}>
        Add Comment
      </button>
    );

    if (isLoading) {
      return (<div>Loading...</div>);
    }

    return (
      <div className={styles.list}>
        <ItemsList items={comments} />
        <div className={styles.commentWrapper}>
         <textarea value={currentComment} rows={7}
           onChange={onChange}
           placeholder={'Write a comment...'}
           className={styles.textarea}>
         </textarea>
         {button}
       </div>
      </div>
    );
  }
}

const mapStateToProps = ({ comments, isLoading }) => ({
  isLoading: isLoading.comments,
  comments,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getAllComments: commentActions.getAllComments,
    addComment: commentActions.addComment,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
