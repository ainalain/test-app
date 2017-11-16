import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

const pathToImages = '../../assets/images';

const Card = ({ product }) => (
  <section className={styles.card}>
    <div className={styles.photo}>
       <img
         src={`${pathToImages}/${product.id}-small.webp`}
            alt="You can order this very tasty italian ice cream with delivery."
       />
    </div>
    <div className={styles.info}>
      <div className={styles.container}>
        <div className={styles.title}>{product.name}</div>
        <div className={styles.price}>{product.price}</div>
        <button className={styles.button}>Buy now</button>
      </div>
      <div className={styles.description}>{product.description}</div>
    </div>
  </section>
);

Card.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Card;
