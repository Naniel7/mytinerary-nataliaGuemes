import { Children, useEffect, useState } from 'react'

import Layout from './layouts/Main'
import Hero from './components/Hero'
import Carousel from '../src/components/Carousel';

function App() {
  const [count, setCount] = useState(0)

  /*useEffect(()=>{
if(scroup) setCount(pre => pre +1)
if(scrodw) setCount(pre => pre -1)
  },[scroup, scrodw])*/

  return (
    <>
      <Layout>
        {count === 0 && <Hero />}
        <Carousel />        
      </Layout>
    </>
  )
}
