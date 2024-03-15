// store.js
import { createStore } from 'redux';

// Define a simple reducer function
const reducer = (state = {}, action) => {
  // Handle actions here
  return state;
};

// Create the Redux store with the reducer
const store = createStore(reducer);

export default store;
