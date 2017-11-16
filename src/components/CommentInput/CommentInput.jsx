import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import styles from './CommentInput.scss';

const CommentInput = ({ onCommentChange, onRatingChange,
  currentComment, currentRating, onClick, error }) => {
  const submitButton = (<button
      className={styles.submitButton}
      type="submit" onClick={onClick}>
      Add Comment
    </button>
  );

  const rating = (<ReactStars
    edit
    value={currentRating}
    onChange={onRatingChange}
    count={5}
    size={22}
    color1={'#939393'}
    color2={'#ffd700'}
    half={false}
  />);

  const errorClass = error.length ? '' : `${styles.hidden}`;

  return (<div className={styles.commentWrapper}>
   <textarea value={currentComment} rows={7}
     onChange={onCommentChange}
     placeholder={'Write a comment...'}
     className={styles.textarea}>
   </textarea>
    <div className={styles.rating}>
      {rating}
    </div>
      {submitButton}
      <div className={`${styles.error} ${errorClass}`}>
          {error}
      </div>
  </div>);
};

CommentInput.propTypes = {
  onCommentChange: PropTypes.func,
  onRatingChange: PropTypes.func,
  onSubmit: PropTypes.func,
  error: PropTypes.string,
};

export default CommentInput;
