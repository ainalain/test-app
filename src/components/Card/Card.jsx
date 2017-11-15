import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

const pathToImages = '../../assets/images';

const Card = ({ product }) => (
  <section className={styles.card}>
    <div className={styles.info}>
      <div className={styles.title}>{product.name}</div>
    </div>
    <div className={styles.photo}>
      <picture className={styles.picture}>
        <source media="(min-width: 900px)"
          srcSet={`${pathToImages}/${product.id}.webp 1200w`}
          sizes="50vw"
        />
       <source media="(min-width: 700px)"
         srcSet={`${pathToImages}/${product.id}800.webp 800w`}
         sizes="30vw"
        />
       <img
         srcSet={`${pathToImages}/${product.id}400.webp 400w`}
         sizes="80vw"
       />
      </picture>
    </div>
  </section>
);

Card.propTypes = {
  product: PropTypes.object,
};

export default Card;
