import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "../../Api/categoryApi";
import storage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';

// Async thunk
 const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    return getCategories();
  }
);

// Slice
const categorySlice = createSlice({
  name: "category",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

const persistConfig = {
  key: 'category',
  storage,
  whitelist: ['data'], 
};

const persistedReducer = persistReducer(persistConfig, categorySlice.reducer);


export { categorySlice, fetchCategories, persistedReducer };
