import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

const SignUp = ({ onSignUp }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    imageURL: "",
    country: "",
  });

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
        "http://localhost:3000/api/user/register",
        formData
      );

      if (response.status === 200) {
        onSignUp(formData.email, formData.password);
        let messageSucceful = response.data.message;
        Swal.fire({
          icon: "success",
          text: messageSucceful,
        });
      } else {
        console.error("Error saving data here");
      }
    } catch (error) {
      let messageError = error.response.data.message;
      Swal.fire({
        icon: "error",
        text: messageError,
      });
      console.error("Netword error ", error);
    }
  };

  const signUpWithGoogle = (credentialResponse) => {
    console.log(credentialResponse);
    const dataUser = jwt_decode(credentialResponse.credential);

    const handleGoogleSignUp = {
      name: dataUser.given_name,
      lastname: dataUser.family_name,
      email: dataUser.email,
      password: dataUser.sub,
      imageURL: dataUser.picture,
      country: "ARG",
    };
    handleSubmit(handleGoogleSignUp);
  };

  return (
   <>
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
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
        <div className="mb-3">
          <input
            type="url"
            className="form-control"
            name="imageURL"
            placeholder="URL of your picture"
            value={formData.imageURL}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select your Country</option>
            <option value="Australia">Australia</option>
            <option value="Brazil">Brazil</option>
            <option value="China">China</option>
            <option value="Egypt">Egypt</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
            <option value="Ireland">Ireland</option>
            <option value="Japan">Japan</option>
            <option value="Mexico">Mexico</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Russia">Russia</option>
            <option value="South Korea">South Korea</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="United States">United States</option>
          </select>
        </div>
      </form>
      <div>
        <div className="signup-button">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => handleSubmit(formData)}
          >
            Sign Up
          </button>
          <div className="googlelogin">
            <GoogleLogin
              text="signup_with"
              onSuccess={signUpWithGoogle}
              onError={() => {
                console.log("LogUp Failed");
              }}
            />

           
          </div> <p className="mt-3">
              Do you have an account? <Link to="/login">Sign In</Link>
            </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
