import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const SignIn = ({ onSignIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Cerrar el formulario de inicio de sesión aquí
        onSignIn(formData.email, formData.password);
      } else {
        console.error("Error logging in");
      }
    } catch (error) {
      console.error("Network error", error);
    }
  };
  const signInWithGoogle = (credentialResponse) => {
    const userData = jwt_decode(credentialResponse.credential);
    console.log(userData);
    
  const handleGoogleSignIn = {
    email: userData.email,
    password: userData.email+userData.sub,
    };

  
  console.log(handleGoogleSignIn);
  };

  return (
    <div className="container mt-5">
      <h2>Sign In</h2>
      <form>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="signIn-button">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Sign In
          </button>
          <GoogleLogin
          text="signin_with"
            onSuccess={signInWithGoogle}
            onError={() => {
              console.log("LogIn Failed");
            }}
          />
          
          <p className="mt-3">
            Don't you have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
