import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions"; 

const initialState = {
  user: null,
  error: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(userActions.registerUser, (state, action) => {
      state.user = action.payload.formData;
      state.error = null; 
    })
    .addCase(userActions.loginUser, (state, action) => {
     
      state.user = action.payload.formData;
      state.error = null; 
    });
});

export default userReducer;
