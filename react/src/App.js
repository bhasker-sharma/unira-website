import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Contactus from './pages/contactus/Contactus';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contactus/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
