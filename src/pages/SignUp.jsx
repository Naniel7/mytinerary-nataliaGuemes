import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import SignUp from "../components/SignUp";

const LogUpForm = () => {
  const dispatch = useDispatch();

  const handleSignIn = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/register",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        //CERRAR SIGN UP
        console.log("Log in succefully");
      } else {
        console.error("Error login");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div className="container">
      <div className="formContainer">
        <SignUp onSignUp={handleSignIn} />
      </div>
    </div>
  );
};

export default LogUpForm;
