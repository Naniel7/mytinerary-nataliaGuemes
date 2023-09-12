import React from 'react';
import { useDispatch } from 'react-redux';
import SignIn from '../components/SignIn';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSignIn = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:3000/api/user/login", {
        email,
        password,
      });

      if (response.status === 200) {
        // Cerrar el formulario de inicio de sesión aquí
        console.log("Log in exitoso");
      } else {
        console.error("Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <div className="container">
      <div className="formContainer">
        <SignIn onSignIn={handleSignIn} />
      </div>
    </div>
  );
};

export default LoginForm;
