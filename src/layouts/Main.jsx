import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  const [login, setLogin] = useState(false)

  useEffect(()=>{
    let token = localStorage.getItem("token")
    if(token){
      setLogin(true)
    }
  })

  return (
    <>
      <Header login={login}/>
      {children}
      <Footer />
    </>
  )
}