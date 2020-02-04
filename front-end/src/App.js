import React from 'react';
import { Route, Switch } from "react-router-dom";
import SignUp from "../src/Components/SignUp";
import LogIn from "../src/Components/LogIn"
import './App.css';

function App() {
  return (
    <div className="App">
       <SignUp/>
       <LogIn/>
    </div>
  );
}

export default App;
