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

function App() {
  const [data, setData] = useState([]);
  const [itineraries, setItineraries] = useState([]); // Estado para los itinerarios

  // Fetch de datos inicial
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

  // Manejo de la creación de itinerarios
  const handleItinerarySubmit = async (newItinerary) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/itineraries",
        newItinerary
      );
      setItineraries((prev) => [...prev, response.data]); // Agrega el nuevo itinerario al estado
    } catch (error) {
      console.error("Error creating itinerary:", error);
    }
  };

  // Definición de rutas
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home data={data} />
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
          <Itineraries onSubmit={handleItinerarySubmit} />
        </Layout>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
