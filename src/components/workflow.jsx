import React from 'react';
import features1 from '../assets/images/features1.png'
import features2 from '../assets/images/features2.png'
import features3 from '../assets/images/features3.png'
const Workflow = () => {
  return (
    <div className="workflow">
      <div className="heading">
        <h2>Workflow that just works</h2>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.</p>
      </div>
      <div className="media grid col-md-2">
        <div className="media-img" data-aos="fade-left" data-aos-duration="1000">
          <img src={features1} alt="media1" />
        </div>
        <div className="media-content" data-aos="fade-right" data-aos-duration="1000">
          <div className="media-light">
         <p>LIGHTNING FAST WORKFLOW</p>
        </div>
          <h3>Data-driven insights</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <div className="media  grid col-md-2">
        <div className="media-img" data-aos="fade-right" data-aos-duration="1500">
          <img src={features2} alt="media2" />
        </div>
        <div className="media-content" data-aos="fade-left" data-aos-duration="1500">
          <div className="media-light">
         <p>LIGHTNING FAST WORKFLOW</p>
        </div>
          <h3>Data-driven insights</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <div className="media grid col-md-2">
        <div className="media-img" data-aos="fade-left" data-aos-duration="2000">
          <img src={features3} alt="media3" />
        </div>
        <div className="media-content" data-aos="fade-right" data-aos-duration="2000">
          <div className="media-light">
         <p>LIGHTNING FAST WORKFLOW</p>
        </div>
          <h3>Data-driven insights</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
    
  );
};

export default Workflow;