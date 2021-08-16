import React from 'react';
import Hero from '../components/hero';
import NavBar from '../components/navbar';

const Home = () => {
  return (
    <div className="container">
      <NavBar />
      <Hero/>
      
    </div>
  );
};

export default Home;