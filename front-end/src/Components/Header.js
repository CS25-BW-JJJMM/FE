import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";



const Header = () => {
	return (
		<div className="header">
			<div className="headerdiv">
                <div>
				<h1 className="header2">Game</h1>
                </div>
                <div>
               <Link to='/login'><h1>LogIn</h1></Link>
               <Link to="/signup"><h1>SignUp</h1></Link>
               </div>
               
			</div>
		</div>
	);
};

export default Header;