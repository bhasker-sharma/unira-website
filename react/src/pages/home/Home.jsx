import React from 'react';
import './Home.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import illustration1 from '../../assets/img_1.png'; // Import illustration image
import illustration2 from '../../assets/img_2.png';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />

      {/* Hero section */}
      <div className="hero-section">
        <img src={illustration1} alt="Illustration" className="illustration_1" />
        
        <div className='hero-content'>
          <h1>Our strategies, your growth in Bussiness</h1>
          <p>The Place wehre you get to know what's stopping you behind</p>

          <div className='hero-button'>
            <button className='services-btn'>SEE SERVICES</button>
            <button className='contactus-btn'>CONTACT US</button>
          </div>
        </div>
      </div>

      {/* Body section */}
      {/* <div className='body-section'> */}

        {/* First row */}
        {/* <div className='row1'>
          <div className='text-card'>
            <h2>Brand voice</h2>
            <p>Strengthen your brand identity with clear, consistent message that resonates with your audience. Developing the brand that speaks. </p>
          </div>

        </div> */}

      {/* </div> */}


      <Footer />
    </div>
  );
};

export default Home;
