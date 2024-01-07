import { createSlice } from "@reduxjs/toolkit";
const orderlistSlice = createSlice({
  name: "orderlist",
  initialState: {
    orderPlaced: [],
  },
  reducers: {
    addOrderlist: (state, action) => {
      const data = action.payload.total_package;
      return { ...state, orderPlaced: [...state.orderPlaced, data] };
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
