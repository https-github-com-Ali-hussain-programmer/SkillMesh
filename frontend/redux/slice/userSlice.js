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
    updateField: (state, action) => {
      const keys = Object.keys(action.payload.updatedField);
      state.userData[keys[1]] = action.payload.updatedField[keys[1]];
    },
    deleteCertificationState: (state, action) => {
      console.log( action.payload.updatedField)
      state.userData.certifications = action.payload.updatedField;
      console.log( state.userData.certifications)
    },
    clearUserData: (state, action) => {
      state.userData = {};
    },
  },
});

export const {
  setUserData,
  updateField,
  deleteCertificationState,
  clearUserData,
} = userSlice.actions;
export default userSlice.reducer;
