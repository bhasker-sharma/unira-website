import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Contactus from './pages/contactus/Contactus';
import Services from './pages/services/Services';
import Aboutus from './pages/aboutus/Aboutus';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contactus/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
