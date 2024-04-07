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
  reducers: {
    updateCategory: (state, action) => {
      const updatedCategory = action.payload;
      const updatedData = state.data.map(category => {
        if (category._id === updatedCategory._id) {
          return updatedCategory; // Update the specific category
        }
        return category; // Keep other categories unchanged
      });
      state.data = updatedData;
    },
  },
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

export const { updateCategory } = categorySlice.actions; // Exporting action creators


export { categorySlice, fetchCategories, persistedReducer };
