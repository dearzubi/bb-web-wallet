import { configureStore } from '@reduxjs/toolkit';
import WalletReducer from './WalletSlice';

const store = configureStore({
  reducer: {
    Wallet: WalletReducer,
  },
});

export default store;
