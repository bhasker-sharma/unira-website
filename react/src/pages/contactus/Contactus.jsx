import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Contactus.css";
import { useState } from "react";
import contactIllustration from "../../assets/contact_us.png";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add form submission logic here
  };

  return (
    <div className="home">
<<<<<<< HEAD
        <Navbar />

    <div className="web-page">
        Hi herre the form will come
    </div>
=======
      <Navbar />
      <div className="contact-section">
        <div className="contact-heading">
          <h3> Contact Us</h3>
          <p> Any questions or remarks ? Leave us a message! </p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name:"
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="E-Mail:"
              />
            </div>

            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number:"
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Message:"
              />
            </div>

            <button type="submit">Submit</button>
          </form>
          <div>
            <img
              src={contactIllustration}
              alt="Illustration"
              className="illustration"
            />
          </div>
        </div>
      </div>
>>>>>>> contact-us

      <Footer />
    </div>
  );
};

export default Contactus;
