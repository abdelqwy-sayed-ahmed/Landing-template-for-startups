import React from 'react';
import { Link } from 'react-router-dom';

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-header">
        <h2>Customer testimonials</h2>
        <p>Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>
      </div>
      <div className="testimonial-row  ">
        <div className="testimonial-card">
          <div className="testimonial-card-content">
            — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
          </div>
          <div className="testimonial-card-footer">
            <p>Roman Level <span className="slash">/</span> <Link to="/" className="app-name">AppName</Link></p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-card-content">
            — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
          </div>
          <div className="testimonial-card-footer">
            <p>Roman Level <span className="slash">/</span> <Link to="/" className="app-name">AppName</Link></p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-card-content">
            — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
          </div>
          <div className="testimonial-card-footer">
            <p>Roman Level <span className="slash">/</span> <Link to="/" className="app-name">AppName</Link></p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Testimonial;