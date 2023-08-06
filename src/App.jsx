import { Children, useState } from 'react'
import './App.css'
import Layout from './layouts/Main'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
  <Hero/>
      </Layout>
    </>
  )
}

export default App
