import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../slice/wishlistSlice";
import TotalPackageReducer from "../slice/TotalpackageSlice";
import orderlistReducer from "../slice/orderlistSlice";
import userReducer from "../slice/userSlice";
import { exchangepersistedReducer } from "../slice/exchangeSlice";
import {
  categorySlice,
  persistedReducer,
  fetchCategories,
} from "../slice/categorySlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import gigReducer from "../slice/gigcreationslice";
export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    orderlist: orderlistReducer,
    TotalPackage: TotalPackageReducer,
    user: userReducer,
    category: persistedReducer,
    gig: gigReducer,
    exchange: exchangepersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
