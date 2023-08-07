import React from 'react'
import Anchor from './Anchors'
import { Icon } from '@mui/material'


function Navbar() {
  const data = [
    { url: "#", content: "Home" },
    { url: "Cities.jsx", content: "Cities" }
  ]

  return (
    <nav>
      <Anchor />
      {data.map((element, index) => <Anchor key={index} url={element.url} content={element.content} />)}
      <button> 
        <div className='LogIcon'><Icon/></div>
      Login</button>
    
    </nav>
  )
}

export default Navbar