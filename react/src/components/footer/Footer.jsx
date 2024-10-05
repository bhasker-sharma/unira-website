import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* first coloum of the footer section */}
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>Phone: +91 84271-82071</p>
          <p>Email: Bhaskersharma13@Mail.Com</p>
          <p>Address: Garhshankar, Punjab, India 144527</p>

          <h4>Visit Us On</h4>
          <div className="social-icons">
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaLinkedin className="icon" />
            <FaFacebook className="icon" />
          </div>
        </div>
        {/* seccond coloum of the footer section */}        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        {/* third coloum of the footer section */}
        <div className="footer-section">
          <h3>Company Information</h3>
          <p>Helping Businesses Grow Through Tailored Strategies And Expert Consultancy.</p>
        </div>
      </div>
        {/* last line of the footer section */}
      <div className="footer-bottom">
        <p>© 2024 Unira. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
