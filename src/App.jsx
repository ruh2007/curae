import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Login from './Login.jsx'
import About from './About.jsx'
import Signup from './Signup.jsx'
import NewSelection from './NewSelection.jsx'
import ShopMore from './ShopMore.jsx'

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
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