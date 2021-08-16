import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const link="https://github.com/abdelqwy-sayed-ahmed/landing"
  return (
    <div className="hero">
      <div className="section-one">
        <h1 className="heading">Landing template for <span>startups</span></h1>
        <p className="sub-heading">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
      </div>
      <div className="section-two">
        <Link to="/" className="btn-started">Get started</Link>
        <Link to={{pathname:link}} className="btn-view"  target="_blank" >View on Github</Link>
      </div>
    </div>
  );
};

export default Hero;