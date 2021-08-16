import React, { useState } from 'react';
import logo from '../assets/images/logo.png'
const NavBar = () => {
  const [isOPen, setIsOpen] = useState(false)
  const handlexpand = () => {
    setIsOpen(!isOPen)
  }
  return (
    <div className="nav">
      <div className="toggle">
        <div className="logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="icon">
          <i className={`${!isOPen ? "fa fa-bars fa-2x" : "fa fa-times fa-2x"}`} onClick={handlexpand}></i>
        </div>
      </div>
          <div>
            <ul className={`nav-list ${!isOPen?"expanded":""}`}>
              <li className="nav-item"><a href="/">Documentation</a></li>
              <li className="nav-item"><button className="btn-primary">Sign up</button></li>
            </ul>
          </div>
        
    
    </div>
  );
};

export default NavBar;