import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="d-flex flex-row justify-content-end translate-bar">
      <small>Espanol +325854256</small>
    </div>
    <div className="d-flex flex-row justify-content-between align-items-center navbar">
      <div className="logo">
        <NavLink to='/'><img src="./images/logo.jpg" /></NavLink>
      </div>
      <div>
        <NavLink to='/' activeClassName='selected'>Home</NavLink>
        <NavLink to='/clinic' activeClassName='selected'>The Clinic</NavLink>
        <NavLink to='/doctors' activeClassName='selected'>The Doctors</NavLink>
        <NavLink to='/blogs' activeClassName='selected'>Blogs</NavLink>
        <NavLink to='/contact' activeClassName='selected'>Contact Us</NavLink>
      </div>
    </div>
  </div>
);

export default Header;