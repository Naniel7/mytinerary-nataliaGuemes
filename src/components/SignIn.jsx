import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        formData
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        
        let messageSucceful = response.data.message
        Swal.fire({
          icon: 'success',
          text: messageSucceful
        })
        navigate('/', { replace: true });
      } else {
        console.error("Error logging in");
      }
    } catch (error) {
      let messageError = error.response.data.message
      Swal.fire({
        icon: 'error',
        text: messageError
      })
      console.error("Network error", error);

    }
  };

  const signInWithGoogle = (credentialResponse) => {
    const userData = jwt_decode(credentialResponse.credential);
  
    const handleGoogleSignIn = {
      email: userData.email,
      password: userData.sub,
    };
    setFormData(handleGoogleSignIn)
    handleSubmit(handleGoogleSignIn)
  };

  return (
   <>
      <h2>Sign In</h2>
      <form className="form-signIn">
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
      </form>
        <div className="signIn-button">
          <button type="submit" className="btn btn-primary" onClick={()=>handleSubmit(formData)}>
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
    </>
  );
};

export default SignIn;
