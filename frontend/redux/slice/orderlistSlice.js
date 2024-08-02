import { createSlice } from "@reduxjs/toolkit";
const orderlistSlice = createSlice({
  name: "orderlist",
  initialState: {
    orderPlaced: null,
  },
  reducers: {
    addOrderlist: (state, action) => {
      state.orderPlaced = action.payload;
    },
    removeOrderlist: (state, action) => {
      const id = action.payload;
      return {
        ...state,
        orderPlaced: state.orderPlaced.filter((item) => item.id !== id),
      };
    },
  },
});
export const { addOrderlist, removeOrderlist } = orderlistSlice.actions;
export const favouritesList = (state) => state.orderlist.favourites;
export default orderlistSlice.reducer;
