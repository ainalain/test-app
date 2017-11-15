const delay = 1000;

const product = {
  name: 'The best gelato in Moscow',
  id: 'classic-gelato',
};
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
export default class ProductApi {
  static getProduct(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, product));
      }, delay);
    });
  }
}
