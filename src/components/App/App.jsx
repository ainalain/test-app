import React from 'react';
import Header from '../Header';
import ProductPage from '../../containers/ProductPage';
import styles from './layout.scss';

const App = (props) => (
  <div>
    <Header />
    <ProductPage />
  </div>
);

export default App;
