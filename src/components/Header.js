import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="d-flex flex-row justify-content-end translate-bar">
      <small>Espanol +325854256</small>
    </div>
    <div className="d-flex flex-row justify-content-between align-items-center navbar">
      <div className="logo">
        <h1><NavLink to='/'>Logo</NavLink></h1>
      </div>
      <div>
        <NavLink to='/' activeClassName='selected'>Home</NavLink>
        <NavLink to='/clinic'>The Clinic</NavLink>
        <NavLink to='/services'>Services</NavLink>
        <NavLink to='/doctors'>The Doctors</NavLink>
        <NavLink to='/testimonals'>Testimonials</NavLink>
        <NavLink to='/blogs'>Blogs</NavLink>
        <NavLink to='/contact'>Contact Us</NavLink>
      </div>
    </div>
  </div>
);

export default Header;