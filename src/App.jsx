import { useState } from 'react'
import './App.css'
import Hero from './Hero'
import WhatWeDo from './components/WhatWeDo'
import Synarch from './components/Synarch'
import { Stats } from '@react-three/drei'
import SynStats from './components/SynStats'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <SynStats/>
    <WhatWeDo/>
    <Synarch/>
    <Footer/>
    </>
  )
}

export default App
