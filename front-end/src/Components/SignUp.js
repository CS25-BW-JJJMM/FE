import React, { useState } from "react";
import axios from "axios";

const initalState = {
  username: "",
  email: "",
  password: "",
  password_re: "",
  
};

const SignUp = props => {
  const [users, setUsers] = useState({ initalState });

  const handleChange = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const checkPassword = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  }

  return (
    <form>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={users.username}
        onChange={handleChange}
      />

      <input
        type="text"
        name="email"
        placeholder="email"
        value={users.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="password"
        value={users.password}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password_re"
        placeholder="password_re"
        value={users.password_re}
        onChange={checkPassword}
      />
    </form>
  );
};

export default SignUp;
