import React from 'react';
import Feature from '../components/feature';
import Hero from '../components/hero';
// import Video from '../components/hero-vid';
import NavBar from '../components/navbar';

const Home = () => {
  return (
    <div className="container">
      <NavBar />
      <Hero />
      <Feature/>
   
      
    </div>
  );
};

export default Home;