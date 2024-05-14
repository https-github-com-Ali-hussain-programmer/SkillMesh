import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';
const exchangeSlice = createSlice({
  name: "exchange",
  initialState: {
    ETH_TO_USD: "",
  },
  reducers: {
    setETH: (state, action) => {
      state.ETH_TO_USD = action.payload;
    },
  },
});
const persistConfig = {
  key: "exchange",
  storage,
  whitelist: ["ETH_TO_USD"],
};

const exchangepersistedReducer = persistReducer(persistConfig, exchangeSlice.reducer);

export const { setETH } = exchangeSlice.actions;


export { exchangepersistedReducer};