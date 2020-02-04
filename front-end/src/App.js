import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import SignUp from "../src/Components/SignUp";
import LogIn from "../src/Components/LogIn";
import Header from "../src/Components/Header"
import './App.css';


function App() {
  return (
    <div className="App">
       {/* <Header/> */}
      <Router>
       <Route exact path ="/signup" component={SignUp}/>
       <Route exact path ="/login" component={LogIn}/>
       </Router>
    </div>
  );
}

export default App;
