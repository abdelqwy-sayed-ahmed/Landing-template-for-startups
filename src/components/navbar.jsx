import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
              <li className="nav-item"><Link to="/" onClick={handlexpand}>Documentation</Link></li>
              <li className="nav-item"><Link to="/" className="btn-primary" onClick={handlexpand}>Sign up</Link></li>
            </ul>
          </div>
        
    
    </div>
  );
};

export default NavBar;