import React from "react";
//import logo from './logo.svg';

//import Homepage from 'F:/app1/src/reactassignment3/Homepage.js';
//import "./App.css";

//import Carousel from './Carousel.js';

//import { useState } from "react";
//import Log from "./Log.js";
import Account from "./reactassignment3/Account";
//import List from "./List";
function App() {
 
  return (
    
    <div className="App">
      <header className="App-header" >
        {/* <img src={logo} className="App-logo" alt="logo"/> */}
        <a className="App link"
       //href="https://reactjs.org"
        target="_blank"
        
        >
          
          <Account/>
          {/* <Log/> */}
        {/* <Homepage/> */}
       </a>
      </header>
    </div>
    
  );
}

export default App;