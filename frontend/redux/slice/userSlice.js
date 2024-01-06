import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload.info;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
