import React, { useEffect, useState } from "react";
import "./App.css";
import Layout from "./layouts/Main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cities from "./pages/Cities";
import Home from "./pages/Home";
import axios from "axios";
import CityDetails from "./pages/CityDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import LogInForm from "./pages/SignIn";
import LogUpForm from "./pages/SignUp";
import Itineraries from "./components/Itinerary";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthState, logout } from "./stores/authSlice";

function App() {
  const [data, setData] = useState([]);
  const [itineraries, setItineraries] = useState([]);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(checkAuthState()); // Verifica si el usuario está autenticado al cargar la app
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/cities");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleItinerarySubmit = async (newItinerary) => {
    if (!isLoggedIn) {
      alert("Debes iniciar sesión para crear un itinerario");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/itineraries",
        newItinerary,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setItineraries((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Error creating itinerary:", error);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home data={data} user={user} onLogout={handleLogout} />
        </Layout>
      ),
    },
    {
      path: "/cities",
      element: (
        <Layout>
          <Cities data={data} />
        </Layout>
      ),
    },
    {
      path: "/cities/:id",
      element: (
        <Layout>
          <CityDetails data={data} />
        </Layout>
      ),
    },
    {
      path: "/register",
      element: (
        <Layout>
          <LogUpForm />
        </Layout>
      ),
    },
    {
      path: "/login",
      element: (
        <Layout>
          <LogInForm />
        </Layout>
      ),
    },
    {
      path: "/itineraries",
      element: (
        <Layout>
          <Itineraries onSubmit={handleItinerarySubmit} isLoggedIn={isLoggedIn} />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
