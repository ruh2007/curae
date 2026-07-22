import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import Autoscroll from './Autoscroll.jsx'
import { Routes, Route } from 'react-router-dom'
import Login from './Login.jsx'
import About from './About.jsx'
import Signup from './Signup.jsx'
import NewSelection from './NewSelection.jsx'
import ShopMore from './ShopMore.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Autoscroll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/new-selection" element={<NewSelection />} />
        <Route path="/shop" element={<ShopMore />} />
      </Routes>
    </>
  )
}

export default App