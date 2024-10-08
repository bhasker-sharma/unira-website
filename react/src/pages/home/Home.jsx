import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import illustration1 from "../../assets/img_1.png"; // Import illustration image
import illustration2 from "../../assets/img_2.png";
import illustration3 from "../../assets/img_3.png";
import illustration4 from "../../assets/img_4.png";
import illustration5 from "../../assets/img_5.png";
import illustration6 from "../../assets/img_6.png";
import illustration7 from "../../assets/img_7.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      {/* Hero section */}
      <div className="web-page">
        <div className="landing-section">
          <div className="hero-content">
            <h1>Our strategies, your growth in Bussiness</h1>
            <p>The Place wehre you get to know what's stopping you behind</p>

            <div className="hero-button">
              <button className="services-btn">SEE SERVICES</button>
              <button className="contactus-btn">CONTACT US</button>
            </div>
          </div>
          <img
            src={illustration1}
            alt="Illustration"
            className="illustration_1"
          />
        </div>

        <div className="body-section">
          {/* First row */}
          <div className="straight-row">
            <div className="text-card">
              <h2>Brand voice</h2>
              <p>
                Strengthen your brand identity with clear, consistent message
                that resonates with your audience. Developing the brand that
                speaks.{" "}
              </p>
            </div>
            <div className="illustrations-row">
              <img
                src={illustration2}
                alt="Illustration"
                className="illustration"
              />
            </div>
          </div>

          {/* second row */}
          <div className="reverse-row">
            <div className="text-card">
              <h2>Revinew Growth</h2>
              <p>
                Drive sustainable growth through, optimized strategies and
                expert guidance.{" "}
              </p>
            </div>
            <div className="illustrations-row">
              <img
                src={illustration3}
                alt="Illustration"
                className="illustration_3"
              />
            </div>
          </div>

          {/* Third row */}
          <div className="straight-row">
            <div className="text-card">
              <h2>CAT Reduction</h2>
              <p>
              Minimize costs by identifying and 
              eliminating inefficiencies in your
              business processes.
              </p>
            </div>
            <div className="illustrations-row">
              <img
                src={illustration4}
                alt="Illustration"
                className="illustration"
              />
            </div>
          </div>

          {/* fourth row */}
          <div className="reverse-row">
            <div className="text-card">
              <h2>Obstacal elimination</h2>
              <p>
              Drive sustainable growth through,
              optimized strategies and expert guidance.{" "}
              </p>
            </div>
            <div className="illustrations-row">
              <img
                src={illustration5}
                alt="Illustration"
                className="illustration_3"
              />
            </div>
          </div>

          {/* Fifth row */}
          <div className="straight-row">
            <div className="text-card">
              <h2>Bussiness audits</h2>
              <p>
              Strengthen your brand identity with a clear, consistent
              message that resonates with your audience. Develope 
              the brand that speaks.{" "}
              </p>
            </div>
            <div className="illustrations-row">
              <img
                src={illustration6}
                alt="Illustration"
                className="illustration"
              />
            </div>
          </div>

          {/* sixth row */}
          <div className="reverse-row">
            <div className="text-card">
              <h2>Customised solution</h2>
              <p>
              Drive sustainable growth through,
              optimized strategies and expert guidance.{" "}
              </p>
            </div>
            <div className="illustrations-row">
              <img
                src={illustration7}
                alt="Illustration"
                className="illustration_3"
              />
            </div>
          </div>


        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
