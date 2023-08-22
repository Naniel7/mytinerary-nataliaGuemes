import React, { useEffect, useState } from 'react';
import './App.css'
import Layout from './layouts/Main'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cities from './pages/Cities'
import Home from './pages/Home'
import Detail from './pages/CityDetails'




function App() {
  const [data, setData] = useState([])
  const router = createBrowserRouter([
    { path: "/", element: <Layout><Home data={data}/></Layout> },
    { path: "/cities", element: <Layout><Cities data={data}/></Layout> },
    { path: "/cities/:id", element: <Layout><Detail data={data}/></Layout> },
  ])


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/cities');
        setData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    };

    fetchData();

  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
