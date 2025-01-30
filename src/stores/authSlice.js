import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getStoredUser = () => {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
};

const initialState = {
  isLoggedIn: !!getStoredUser(),
  user: getStoredUser(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("🔹 Guardando usuario en Redux y localStorage:", action.payload);
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      console.log("🔹 Cerrando sesión");
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem("user");
    },
    checkAuthState: (state) => {
      console.log("🔹 Verificando estado de autenticación...");
      const user = getStoredUser();
      state.isLoggedIn = !!user;
      state.user = user;
    },
  },
});

export const { login, logout, checkAuthState } = authSlice.actions;
export default authSlice.reducer;
