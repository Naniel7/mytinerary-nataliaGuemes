import React from 'react'
import Navbar from './Navbar'

function Header({login}) {

  return (
    <header>
      <h2>My Tinerary</h2>
      <Navbar login={login}/>
    </header>
  )
}
export default Header