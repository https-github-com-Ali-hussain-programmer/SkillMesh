import { createSlice } from "@reduxjs/toolkit";
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    favourites: [],
  },
  reducers: {
  addWishlist:()=>{

  },
  removeWishlist:()=>{
    
  }
  },
});
export const { addWishlist,removeWishlist } = wishlistSlice.actions;
export const favouritesList = (state) => state.wishlist.favourites;
export default wishlistSlice.reducer;