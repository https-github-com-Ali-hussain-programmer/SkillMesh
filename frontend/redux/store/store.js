import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from '../slice/wishlistSlice'
import TotalPackageReducer from '../slice/TotalpackageSlice'
export const store = configureStore({
  reducer: {
    wishlist:wishlistReducer,
    TotalPackage:TotalPackageReducer 
  },
});
