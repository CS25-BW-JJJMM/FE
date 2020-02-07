import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
	<div className="header">
	  <div>
		<h1 className="white-color left-header"> Game</h1>
      </div>
      <div className="right-header">
        <NavLink to='/login' className="white-color">LogIn</NavLink>
        <NavLink to="/signup" className="white-color">SignUp</NavLink>
      </div>
    </div>
	);
};

export default Header;