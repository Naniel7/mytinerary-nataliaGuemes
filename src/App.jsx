import { useState } from 'react'
import './App.css'
import Header from './components/Header/Index'
import Footer from './components/Footer/Index'
import Card from './components/Card/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main>
       <p>header</p>
       <Card />
      </main>
      <Footer/>
    </>
  )
}

export default App
