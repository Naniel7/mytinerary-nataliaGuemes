import React, { useRef } from 'react';
import axios from 'axios';
import SignUp from '../components/SignUp';


const LoginForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSignIn = () => {
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    axios
      .post("http://localhost:3000/api/user/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.message) {
          error.response.data.message.forEach((message) => console.log(message));
        } else {
          console.error("Error de red:", error);
        }
      });
  };

  return (
    <div className="container">
      <div className="formContainer">
      <SignUp/>
      </div>
    </div>
  );
};

export default LoginForm;
