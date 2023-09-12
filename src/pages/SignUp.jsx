import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import SignUp from "../components/SignUp";

const LogUpForm = () => {
  const dispatch = useDispatch();

  const handleSignUp = async (formData) => {
    try {
      const response = await axios.post("http://localhost:3000/api/user/register",
        formData
      );
  
      if (response.status === 200) {
        // Cerrar el formulario de registro
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
