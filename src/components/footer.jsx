import React from 'react';
import logo from '../assets/images/logo.png'
import facebook from '../assets/images/Facebook.svg'
import instagram from '../assets/images/Instagram.svg'
import twitter from '../assets/images/Twitter.svg'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer"  data-aos="fade-right" data-aos-duration="2000">
      <div className="section1">
          <img src={logo} alt="logo" className="logo-footer" />
        <div className="social">
          <img src={facebook} alt="facebook" className="social-icons"/>
          <img src={twitter} alt="twitter" className="social-icons"/>
          <img src={instagram} alt="instagram"className="social-icons" />
        </div>
      </div>
      <div className="section2">
        <div className="footer-list">
          <ul className="footer-items">
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/">FAQ's</Link>
            </li>
            <li>
              <Link to="/">Support</Link>
            </li>
          </ul>
        </div>
        <div className="reserved">
          <p>All rights reserved &copy;</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;