import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Navbar from './components/navbar/Navbar';
import Contact from './pages/contact/Contact';
import Register from './pages/register/Register';
import './App.css';

function App() {
  return (
    <div className="main w-full overflow-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
