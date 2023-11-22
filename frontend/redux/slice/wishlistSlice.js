import { createSlice } from "@reduxjs/toolkit";
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    favourites: [],
  },
  reducers: {
    addWishlist: (state, action) => {
      const data=action.payload.data
      return  {...state,favourites:[...state.favourites,data]}  
      console.log(action.payload.data);
    },
    removeWishlist: (state, action) => {
      const id=action.payload
      return {
        ...state,
        favourites: state.favourites.filter(item => item.id !== id),
      };
    },
  },
});
export const { addWishlist, removeWishlist } = wishlistSlice.actions;
export const favouritesList = (state) => state.wishlist.favourites;
export default wishlistSlice.reducer;
