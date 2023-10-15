import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Navbar from './components/navbar/Navbar'
import Contact from './pages/contact/Contact'
import Register from './pages/register/Register'

function App() {

  return (
    <div className="main w-full overflow-hidden">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
