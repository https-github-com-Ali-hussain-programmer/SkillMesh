import { createSlice } from "@reduxjs/toolkit";
const exchangeSlice = createSlice({
  name: "exchangeSlice",
  initialState: {
    ETH_TO_USD: "",
  },
  reducers: {
    setETH: (state, action) => {
      state.ETH_TO_USD = action.payload;
    },
  },
});
export const { setETH } = exchangeSlice.actions;

export default exchangeSlice.reducer;
