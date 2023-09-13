import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

const registerUser = createAction("registerUser", (formData) => {
  return {
    payload: {
      formData,
    },
  };
});

const loginUser = createAction("loginUser", (formData) => {
  return {
    payload: {
      formData,
    },
  };
});

const authenticate = createAsyncThunk("authenticate", async () => {
  try {
    let token = localStorage.getItem("token");
    let user = await axios.post("http://localhost:3000/api/user/authenticated", null, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then((response) => {
      console.log("Authenticated successfully");
      localStorage.setItem("token", response.data.token);
      return response.data.user;
    });
    console.log(user);
  } catch (error) {
    console.error(error.message);
  }
});

const userActions = { registerUser, loginUser };
export default{ userActions, authenticate };