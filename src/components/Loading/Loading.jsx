import React from 'react';
import PropTypes from 'prop-types';
import LoadingGif from '../../assets/images/loading-large.gif';
import LoadingGifSmall from '../../assets/images/loading-small.gif';
import styles from './Loading.scss';

const Loading = ({ ajaxCallInProgress, large }) => {
  const loadingClass = ajaxCallInProgress ? styles.loading :
    `${styles.loading} ${styles.hidden}`;

  const sizeClass = large ? '' : `${styles.small}`;
  const gif = large ? LoadingGif : LoadingGifSmall;
  return (<div className={`${loadingClass} ${sizeClass}`}>
        <img className={styles.image}
          src={`${gif}`}
          alt={'loading spinner'} />
        </div>);
};

Loading.propTypes = {
  ajaxCallInProgress: PropTypes.bool,
};

export default Loading;
