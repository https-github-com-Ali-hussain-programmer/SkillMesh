import { createSlice } from "@reduxjs/toolkit";
const gigcreationSlice = createSlice({
  name: "gigcreation",
  initialState: {
    gigs: [],
    loading: false,
  },
  reducers: {
    setGigs: (state, action) => {
      state.gigs = action.payload;
    },
  },
});
export const { setGigs } =  gigcreationSlice.actions;

export default gigcreationSlice.reducer;
