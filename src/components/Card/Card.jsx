import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-image-webp';
import styles from './Card.scss';

const pathToImages = './assets/images';
const fallBackPath = './assets/images';

const Card = ({ product }) => (
  <section className={styles.card}>
    <div className={styles.photo}>
       <Image className={styles.img}
         webp={`${pathToImages}/${product.id}-small.webp`}
         src={`${fallBackPath}/${product.id}-xs.png`}
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
