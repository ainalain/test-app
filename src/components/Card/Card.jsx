import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

const pathToImages = '../../assets/images';

const Card = ({ product }) => (
  <section className={styles.card}>
    <div className={styles.photo}>
      <picture className={styles.picture}>
        <source media="(min-width: 900px)" type="image/webp"
          srcSet={`${pathToImages}/${product.id}.png 1200w`}
          sizes="30vw"
        />
       <source media="(min-width: 700px)" type="image/webp"
         srcSet={`${pathToImages}/${product.id}-medium.webp 800w`}
         sizes="40vw"
        />
       <img
         srcSet={`${pathToImages}/${product.id}-small.webp 400w`}
         sizes="80vw"
       />
      </picture>
    </div>
    <div className={styles.info}>
      <div className={styles.title}>{product.name}</div>
      <div className={styles.price}>{product.price}</div>
      <div className={styles.description}>{product.description}</div>
    </div>
  </section>
);

Card.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Card;
