import React from 'react'
import Anchor from '../Anchor'

function Index() {
    const data = [
        {url:"#",text: "Home"},
        {url:"#", text:"Cities"}
    ]

  return (
    <nav>
        {data.map((element,index)=> <Anchor key ={index} url={element.url} text={element.text}/>)}
        <button>Login</button>
            </nav>
  )
}

export default Index