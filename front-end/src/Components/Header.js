import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
	return (
		<div className="header">
			<div className="headerdiv">
				<h1 className="header2">Game</h1>
               <Link to='/LogIn'> <h1>LogIn</h1></Link>
               <Link to='/LogIn'><h1>SignUp</h1></Link>
			</div>
		</div>
	);
};

export default Header;