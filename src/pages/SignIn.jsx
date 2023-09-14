import React from "react";
import { useDispatch } from "react-redux";
import SignIn from "../components/SignIn";
import axios from "axios";
import userActions from "../stores/actions/userActions";
import { GoogleLogin } from "@react-oauth/google";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSignIn = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
      
        localStorage.setItem("token", response.data.token);
      } else {
        dispatch(userActions.loginError());
        console.error("Error logging in");
      }
    } catch (error) {
      console.error("Network error", error);
    }
  };

  return (
    <div className="container">
      <div className="formContainer">
        <SignIn onSignIn={handleSignIn} />
        <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
      </div>
    </div>
  );
};

export default LoginForm;