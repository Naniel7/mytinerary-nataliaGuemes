import React from "react";
import { useDispatch } from "react-redux";
import SignIn from "../components/SignIn";
import userActions from "../stores/actions/userActions"; 

const LoginForm = () => {
  const dispatch = useDispatch();

  // Función para manejar el inicio de sesión
  const handleLogin = async (userData) => {
    try {z
      await dispatch(userActions.loginUser(userData));
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
    }
  };

  return (
    <div className="container">
      <div className="formContainer">
        {/* Pasar handleLogin al componente SignIn */}
        <SignIn onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default LoginForm;
