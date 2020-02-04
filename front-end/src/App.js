import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import SignUp from "./Components/Signup/SignUp";
import LogIn from "./Components/Login/LogIn";
import Header from "../src/Components/Header"
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
       <Route exact path ="/signup" component={SignUp}/>
       <Route exact path ="/login" component={LogIn}/>
       </Router>
    </div>
  );
}

export default App;
