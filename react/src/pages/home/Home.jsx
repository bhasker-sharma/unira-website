import React from 'react';
import './Home.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import illustration from '../../assets/img_1.png'; // Import illustration image

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        {/* Illustration image positioned in top right */}
        <img src={illustration} alt="Illustration" className="illustration" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
