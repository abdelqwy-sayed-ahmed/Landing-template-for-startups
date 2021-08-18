import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import videoImg from '../assets/images/video.jpg'
import Modal from 'react-modal';
import video from '../assets/video.mp4'

const Hero = () => {
  const [isOpen,setOpen]=useState(false)
  const link = "https://github.com/abdelqwy-sayed-ahmed/landing"
  // const videoUrl="https://player.vimeo.com/video/174002812"
  const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    
   
  },
};
  return (
    <div className="hero ">
      <div className="section-one"  >
        <h1 className="heading" data-aos="zoom-in" data-aos-duration="1500">Landing template for <span>startups</span></h1>
        <p className="sub-heading" data-aos="zoom-in" data-aos-duration="2000">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
      </div>
      <div className="section-two" data-aos="zoom-in-up" data-aos-duration="3000">
        <Link to="/" className="btn-started" >Get started</Link>
        <Link to={{pathname:link}} className="btn-view"  target="_blank" >View on Github</Link>
      </div>
      <div className="section-three" data-aos="zoom-in-up" data-aos-duration="3000">
        <img src={videoImg} alt="hero-video" style={{ padding: "2rem 5rem" }} onClick={() => setOpen(true)} />
        <Modal
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        style={customStyles}
        ariaHideApp={false}
        >
          <video src={video} autoPlay controls style={{width:'100%', maxHeight:'80vh'}}></video>
        
        </Modal>
        
      </div>
    </div>
  );
};

export default Hero;