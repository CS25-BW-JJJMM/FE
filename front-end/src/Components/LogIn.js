import React, { useState } from "react";

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

   return(
      
     <div>
        <form>
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

         <button>
           Log In
         </button>
       </form>
      
     </div>
   )
  }

  export default LogIn;