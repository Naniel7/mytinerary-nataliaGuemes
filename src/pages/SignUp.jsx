import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import SignUp from "../components/SignUp";
import {useNavigate } from "react-router-dom";

const LogUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        {email, password}
      );

      if (response.status === 200) {
        // Cerrar el formulario de registro
        localStorage.setItem("token", response.data.token);
        navigate("/", { replace: true });
        console.log("Sign up successfully");
      } else {
        console.error("Error signing up");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div className="container">
      <div className="formContainer">
      <SignUp onSignUp={handleSignUp} />
      </div>
    </div>
  );
};

export default LogUpForm;
