import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './currency/currencySlice';

const store = configureStore({
  reducer: {
    currencies: currencyReducer,
  },
});

export default store;
