import React from 'react'
import Anchor from './Anchors'


function Navbar() {
    const data = [
        {url:"#",content:"Home"},
        {url:"#",content:"Cities"}
    ]

  return (
    <nav>
      <Anchor/>
        
        {data.map((element,index)=> <Anchor key ={index} url={element.url} text={element.text}/>)}
        <button>Login</button>
            </nav>
  )
}

export default Navbar