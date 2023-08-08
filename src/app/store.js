// import { configureStore } from '@reduxjs/toolkit'

// const store = configureStore({
//   reducer: {},
// })

// export default store;


// store.js
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const store = configureStore({
  reducer: reducer,
});

export default store;