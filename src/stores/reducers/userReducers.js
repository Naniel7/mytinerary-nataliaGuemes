import { createSlice } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";

const initialState = {
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.user = action.payload.formData;
      state.error = null;
    },
    loginUser: (state, action) => {
      state.user = action.payload.formData;
      state.error = null;
    },
  },
});

export const { registerUser, loginUser } = userSlice.actions;
export default userSlice.reducer;
