import React, { useState } from "react";
import axios from "axios";

const initalState = {
  username: "",
  email: "",
  password1: "",
  password2: "",
  
};

const SignUp = props => {
  const [users, setUsers] = useState({ initalState });

  const handleChange = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://cs25-bw-be.herokuapp.com/api/registration/`, users).then((res) => {
        console.log('I am here', res)
    });
};

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={users.username}
        onChange={handleChange}
        pattern="^[a-zA-Z0-9_.-]*$"
        required
      />

      <input
        id="pass1"
        type="text"
        name="email"
        placeholder="email"
        value={users.email}
        onChange={handleChange}
       
      />

      <input
        type="password"
        name="password1"
        placeholder="password"
        value={users.password1}
        onChange={handleChange}
        maxLength="24"
        minLength="8"
	    required
      />

      <input
        type="password"
        name="password2"
        placeholder="password_re"
        value={users.password2}
        onChange={handleChange}
        ma maxLength="24"
        minLength="8"
	    required

      />
      <button type="submit">
          Submit Button
      </button>
    </form>
  );
};

export default SignUp;
