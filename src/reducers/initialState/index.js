import comments from './comments';
import product from './product';
import isLoading from './loading';

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
