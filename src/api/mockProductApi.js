const delay = 1000;

const product = {
  name: 'The best gelato in Moscow',
  id: 'classic-gelato',
  price: '$7.5',
  description: 'Collagen is a complex structural protein that maintains strength and flexibility throughout the body. As we age, collagen depletion can lead to common signs of aging in the skin, hair, nails, muscles, tendons, ligaments, and bones. Super Collagen contains clinically studied BioActive NeoCell Collagen which supports healthy collagen formation throughout the body.',
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
