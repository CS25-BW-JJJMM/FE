import React, { useState } from "react";
import axiosWithAuth from "../../utils/axios";
import axios from "axios";
import "./Login.css";

const initialState = {
  username: "",
  email: "",
  password: ""
};

const baseUrl = process.env.REACT_APP_API_BASE_URL || "https://cs25-bw-be.herokuapp.com";

const LogIn = props => {
  const [creds, setCreds] = useState(initialState);

  const handleChange = e => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post(`${baseUrl}/api/login/`, creds).then(res => {
      localStorage.setItem("token", res.data.key);
      props.history.push("/home");
    });
  };

  return (
    <div className="cointainer" id="cointainer2">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input, input2">
          <label htmlFor="username" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={creds.username}
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <label htmlFor="email" />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={creds.email}
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <label htmlFor="password" />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={creds.password}
            onChange={handleChange}
          />
        </div>

        <button className="btn" type="submit">
          {" "}
          Log In{" "}
        </button>
      </form>
    </div>
  );
};

export default LogIn;
