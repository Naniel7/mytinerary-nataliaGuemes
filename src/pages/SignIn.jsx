import React from "react";
import { useDispatch } from "react-redux";
import SignIn from "../components/SignIn";
import axios from "axios";
import userActions from "../stores/actions/userActions";

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="formContainer">
        <SignIn />
      </div>
    </div>
  );
};

export default LoginForm;