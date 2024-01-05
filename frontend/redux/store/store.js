import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../slice/wishlistSlice";
import TotalPackageReducer from "../slice/TotalpackageSlice";
import orderlistReducer from "../slice/orderlistSlice";
import userReducer from '../slice/userSlice';
export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    orderlist: orderlistReducer,
    TotalPackage: TotalPackageReducer,
    user: userReducer,
  },
});
