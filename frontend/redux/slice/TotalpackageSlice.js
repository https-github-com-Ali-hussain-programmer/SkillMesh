import { createSlice } from "@reduxjs/toolkit";

const initialState = {
data: {},
};

export const TotalPackageSlice = createSlice({
  name: "TotalPackage",
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload.TotalPackage;
      
    },
  },
});

export const { updateData } = TotalPackageSlice.actions;
export const packagedata = (state) => state.TotalPackage.data;
export default TotalPackageSlice.reducer;
