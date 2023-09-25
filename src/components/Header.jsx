import React from 'react'
import Navbar from './Navbar'

function Header({login}) {

  return (
    <header>
      <div className='logo'>
        <img className='icon' src="https://i.imgur.com/8d2dSKS.png" alt="" />
      <img src="https://i.imgur.com/HsgGSYP.png" alt="title" srcset="" />
      </div>
      
      <Navbar login={login}/>
    </header>
  )
}
export default Header