import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <div className="main">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
