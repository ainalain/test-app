import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import styles from './ListItem.scss';

const ListItem = ({ text, date, rating, author }) => (
  <li className={styles.item}>
    <div className={styles.heading}>
      <span className={styles.author}>{author}</span>
      <span className={styles.date}>{date}</span>
    </div>
    <div className={styles.rating}>
      <ReactStars
        value={rating}
        count={5}
        size={20}
        color1={'#939393'}
        color2={'#ffd700'}
      />
    </div>
    <div className={styles.text}>
      {text}
    </div>
  </li>
);

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  date: PropTypes.string,
  rating: PropTypes.number,
  author: PropTypes.string,
};

ListItem.defaultProps = {
  text: '',
  author: 'William Shakespeare',
};

export default ListItem;
