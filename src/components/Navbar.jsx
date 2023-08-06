import React from 'react'
import Anchor from './Anchors'


function Navbar() {
    const data = [
        {url:"#",content:"Home"},
        {url:"Cities.jsx",content:"Cities"}
    ]

  return (
    <nav>
      <p>My Tinerary</p>
      <Anchor/>
                {data.map((element,index)=> <Anchor key={index} url={element.url} content={element.content}/>)}
        <button>Login</button>
            </nav>
  )
}

export default Navbar