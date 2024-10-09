import React from 'react';
import './Navbar.css'; // optional, if you want to style it separately
import { Link } from 'react-router-dom';

const Navbar = () => { //function is made
  return (
    <header>
      <nav>
      <div className="logo">
        <h1>unira</h1>
      </div>
      <div className='nav'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
        </ul>
      </div>
      </nav>
    </header>
  );
}

export default Navbar;
