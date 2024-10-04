import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing icons from react-icons


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">

                {/* This is the footer area for contact Information */}
                <div className="footer-coloum">
                    <h3>Contact Information</h3>
                    <p>Phone: +91 8427182071</p>
                    <p>Email: bhaskersharma13@gmail.com</p>
                    <p>Address: garhshankar,punjab,India</p>
                </div>

                {/* This is the footer area for social media */}
                <div className="footer-column">
                    <h3>Visit Us On</h3>
                    <div className="social-icons">
                        <FaFacebook />
                        <FaTwitter />
                        <FaLinkedin />
                        <FaInstagram />
                    </div>
                </div>

                {/* This is the footer area for Quick links section */}
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Blog</li>
                    </ul>
                </div>

                {/* This is the footer area for company Information */}
                <div className="footer-column">
                    <h3>Company Information</h3>
                    <p>This is Unira</p>
                </div>
            </div>
            <div className='last-line'>
                    <p>&copy; 2023 Unira. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
