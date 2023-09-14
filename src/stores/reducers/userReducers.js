import { createSlice } from "@reduxjs/toolkit";
//import userActions from "../actions/userActions";

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


/*
import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";

const initialState = {
  user: {
    email:"",
    _id:"",
  }
}

const userReducer = createReducer(initialState, (builder)=>{
  return builder.addCase(userActions.loginUser.fulfilled, (state, action)=>{
    return{user:action.payload.user}
  })
  .addCase(userActions.authenticate.fulfilled, (state, action)=>{
    return {user: action.payload.user}
  })
})

export default userReducer*/