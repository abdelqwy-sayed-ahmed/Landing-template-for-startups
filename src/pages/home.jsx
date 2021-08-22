import React from 'react';
import Feature from '../components/feature';
import Hero from '../components/hero';
import NavBar from '../components/navbar';
import Testimonial from '../components/testimonial';
import Workflow from '../components/workflow';

const Home = () => {
  return (
    <div className="container">
      <NavBar />
      <Hero />
      <Feature />
      <Workflow />
      <Testimonial/>
      
   
      
    </div>
  );
};

export default Home;