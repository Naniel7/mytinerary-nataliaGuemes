import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: null,
    token: localStorage.getItem("token") || null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export const checkAuthState = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await axios.get("http://localhost:3000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data) {
        dispatch(loginSuccess({ user: response.data, token }));
      }
    } catch (error) {
      console.error("User not authenticated", error);
      dispatch(logout());
    }
  }
};

export default authSlice.reducer;
