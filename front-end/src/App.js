import React from 'react';
import SignUp from "../src/Components/SignUp";
import LogIn from "../src/Components/LogIn"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <SignUp/>
       <LogIn/>
      </header>
    </div>
  );
}

export default App;
