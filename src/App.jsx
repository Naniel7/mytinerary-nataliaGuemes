import { Children, useEffect, useState } from 'react'
import './App.css'
import Layout from './layouts/Main'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cities from './pages/Cities'
import Home from './pages/Home'

function App() {
  const router = createBrowserRouter([
    {path:"/", element: <Home />},
    {path:"/cities", element: <Cities />},
  ])

  /*useEffect(()=>{
if(scroup) setCount(pre => pre +1)
if(scrodw) setCount(pre => pre -1)
  },[scroup, scrodw])*/

  return (
    <>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  )
}

export default App
