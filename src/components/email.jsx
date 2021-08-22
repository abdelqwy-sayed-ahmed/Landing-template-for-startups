import React from 'react';
import arrow from '../assets/images/arrow.svg'

const Email = () => {
  return (
      <div className="email"  data-aos="fade-right" data-aos-duration="2000">
        <div className="email-header">
            <h3>For previewing layouts and visual?</h3>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Your best email" />
          <img src={arrow} alt="arow" className="arrow" />
        </div>
        
      </div>

  );
};

export default Email;