import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const registerUser = createAction("registerUser", (formData) => {
  return {
    payload: {
      formData,
    },
  };
});

const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3000/api/auth/login", userData);
    console.log("🔹 Respuesta del backend:", response.data);

    if (response.data.success) {
      dispatch(login(response.data.user)); // Asegúrate de que `response.data.user` existe
    } else {
      console.error("🔸 Error: El backend no devolvió success=true");
    }
  } catch (error) {
    console.error("🔸 Error en login:", error);
  }
};

const authenticate = createAsyncThunk("authenticate", async () => {
  try {
    console.log("test");
    let token = localStorage.getItem("token");
    let user = await axios.post(
      "http://localhost:3000/api/user/authenticated",
      null,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log("Authenticated successfully");
    localStorage.setItem("token", response.data.token);

    return {
      user: user,
    };
  } catch (error) {
    console.error(error.message);
  }
});

const userActions = { registerUser, loginUser, authenticate };
export default userActions;
