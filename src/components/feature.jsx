import React from 'react';
import f1 from '../assets/images/feature1.svg'
import f2 from '../assets/images/feature2.svg'
import f3 from '../assets/images/feature3.svg'
import f4 from '../assets/images/feature4.svg'
import f5 from '../assets/images/feature5.svg'
import f6 from '../assets/images/feature6.svg'
const Feature = () => {
  return (
    <div className="feature grid col-md-2 col-md-3"  >
        <div className="card" data-aos="fade-right" data-aos-duration="1000">
          <div className="feature-icon" >
            <img src={f1} alt="feature1" />
          </div>
          <h3>Robust Workflow</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
        </div>
        <div className="card" data-aos="fade-right" data-aos-duration="1500">
          <div className="feature-icon">
            <img src={f2} alt="feature2" />
          </div>
          <h3>Robust Workflow</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
        </div>
        <div className="card" data-aos="fade-right" data-aos-duration="2000">
          <div className="feature-icon">
            <img src={f3} alt="feature3" />
          </div>
          <h3>Robust Workflow</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
        </div>
        <div className="card" data-aos="fade-left" data-aos-duration="1000">
          <div className="feature-icon">
            <img src={f4} alt="feature4" />
          </div>
          <h3>Robust Workflow</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
        </div>
        <div className="card" data-aos="fade-left" data-aos-duration="1500">
          <div className="feature-icon">
            <img src={f5} alt="feature5" />
          </div>
          <h3>Robust Workflow</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
        </div>
        <div className="card" data-aos="fade-left" data-aos-duration="2000">
          <div className="feature-icon">
            <img src={f6} alt="feature6" />
          </div>
          <h3>Robust Workflow</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
        </div>
    </div>
  );
};

export default Feature;