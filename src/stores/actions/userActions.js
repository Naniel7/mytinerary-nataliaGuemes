import { createAction } from "@reduxjs/toolkit";

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

const userActions = { registerUser, loginUser };

export default userActions;