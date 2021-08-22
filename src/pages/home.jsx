import React from 'react';
import Email from '../components/email';
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
      <Testimonial />
      <Email/>
      
   
      
    </div>
  );
};

export default Home;