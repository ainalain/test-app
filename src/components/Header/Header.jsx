import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Logo from '../../assets/icons/logo.svg';
import styles from './Header.scss';

export const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li>
          <div className={styles.logo}>
            <Icon glyph={Logo} className={styles.logoIcon} />
          </div>
        </li>
        <li className={styles.link}>Bakery</li>
        <li className={styles.link}>Ice Cream</li>
        <li className={styles.link}>Chocolate</li>
        <li className={styles.link}>Birthday Cakes</li>
      </ul>
    </nav>
    <span className={styles.search}>
      <input type="text" placeholder="Search" />
    </span>
  </header>
);

export default Header;
