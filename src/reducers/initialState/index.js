import comments from './comments.json';
import product from './product.json';
import isLoading from './loading.json';

const initialReset = false;

const initialState = {
  comments,
  product,
  isLoading,
  initialReset,
};

export {
  initialState as default,
  comments,
  product,
  isLoading,
  initialReset,
};
