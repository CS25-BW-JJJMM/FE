import React, { useState } from "react";
// import axiosWithAuth from '../utils/axios'
import {Link} from 'react-router-dom';
import axios from "axios";
import './Login.css';

const initialState = {
    username: "",
    email:"",
    password: "" 
    
  };

  const LogIn = (props) => {
   const [creds, setCreds] =  useState(initialState);
  

   const handleChange = e => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
    console.log(e.target.value)
  };
   
  const handleSubmit = e => {
    e.preventDefault();
    axios
    .post(`https://cs25-bw-be.herokuapp.com/api/login/`, creds)
    .then(res => {
      localStorage.setItem('token', res.data.token);
    });

  }

   return(
      
     <div className = "cointainer" id = "cointainer2">
        <form  className = "form" onSubmit={handleSubmit}>
        <div className = "input, input2">
       <label htmlFor="username"/>
       <input 
       type="text"
        name="username"
        placeholder="Username"
        value={creds.username}
        onChange={handleChange}
        />
        </div>

        <div className = "input">
        <label htmlFor="username"/>
        <input
         type="text"
         name="email"
         placeholder="email"
         value={creds.email}
         onChange={handleChange}/>
         </div>

        <div className = "input">
        <label htmlFor="username"/>
         <input
         type="password"
         name="password"
         placeholder="password"
         value={creds.password}
         onChange={handleChange}/>
         </div>

            <Link><button className= "btn" type="submit"> Log In </button></Link>
       </form>
      
     </div>
   )
  }

  export default LogIn;