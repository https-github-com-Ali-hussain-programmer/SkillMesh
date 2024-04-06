// import {createSlice, current} from "@reduxjs/toolkit"
// const gigcreationSlice = createSlice({
//     name: "gigcreation",
//     initialState: {
//         title: "",
//         category: "",
//         subField: "",
//         tags: [],
//     },
//     reducers:{
//         setGigTitle: (state, action) => {
//             state.title =action.payload;
//             localStorage.setItem("gigTitle", action.payload);
//         },
//         setGigCategory: (state, action) => {
//             state.category = action.payload;
//         },
//         setGigSubField: (state, action) => {
//             state.subField = action.payload;
//         },
//         setGigTags: (state, action) =>{
//             state.tags = action.payload;
//         }

//     },
// });

// export const {setGigTitle, setGigCategory, setGigSubField, setGigTags} = gigcreationSlice.actions;
// export default gigcreationSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGig } from "../../Api/gigApi";
const fetchGigById = createAsyncThunk("/fetchGigs", async (user) => {
  return await getGig();
});

const gigcreationSlice = createSlice({
  name: "gigcreation",
  initialState: {
    gigs: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGigById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchGigById.fulfilled, (state, action) => {
      state.gigs = action.payload;
      state.loading = false;
    });

  },
});

export default gigcreationSlice.reducer;
