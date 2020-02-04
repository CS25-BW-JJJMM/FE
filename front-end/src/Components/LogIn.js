import React, { useState } from "react";
// import axiosWithAuth from '../utils/axios'
import axios from "axios";

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
      
     <div>
        <form onSubmit={handleSubmit}>
       <input
       type="text"
        name="username"
        placeholder="Username"
        value={creds.username}
        onChange={handleChange}
        />
        <input
         type="text"
         name="email"
         placeholder="email"
         value={creds.email}
         onChange={handleChange}/>

         <input
         type="password"
         name="password"
         placeholder="password"
         value={creds.password}
         onChange={handleChange}/>

         <button type="submit"> Log In </button>
       </form>
      
     </div>
   )
  }

  export default LogIn;