import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import styles from './ItemsList.scss';

const ItemsList = ({ items, title }) => (
  <div className={styles.section}>
    <ul className={`${styles.items} ${styles[title]}`}>
      {items.map((item, index) => (
        <ListItem {...item} key={index} />
      ))}
    </ul>
  </div>
);

ItemsList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

ItemsList.defaultProps = {
  title: 'Comments',
  items: [],
};

export default ItemsList;
