import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  const handleGoogleSignIn = () => {
    // AGREGAR GOOGLE
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
          <button onClick={handleGoogleSignIn} className="btn btn-danger mt-3">
            Sign In with Google
          </button>
          <p className="mt-3">
            Don't you have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
