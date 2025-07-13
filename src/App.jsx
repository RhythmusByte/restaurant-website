import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add these placeholder routes for now */}
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/menu" element={<div>Menu Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </Router>
  );
}
