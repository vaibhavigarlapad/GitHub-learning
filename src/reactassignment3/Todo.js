

import React from "react";
//import logo from './logo.svg';
import "./App.css";

//import Carousel from './Carousel.js';
//import Homepage from './reactassignment3/homepage';
 import { useState } from "react";
import List from "./List";
function App() {
  const [CurrentItem, setCurrentItem] = useState(null);/////////usually current item will take for what the user is currently typing
  const [itemlist, updateItemlist] = useState([]);
  const onChangehandler = (e) => {
    console.log("current value", e.target.value);
    setCurrentItem(e.target.value);//this will store the latest value wt the user has been typed
  };
  const addupdatelist = () => {
    updateItemlist([...itemlist, { item: CurrentItem, key: Date.now() }]);
    //console.log("list items",itemlist)
    setCurrentItem("");
  };
  return (
    <div className="App">
      <header className="App-header" >
        <div className="wrapper">
          <div className="Input-wrapper">
            <input value={CurrentItem} onChange={onChangehandler} />
            <button placeholder="Add item" onClick={addupdatelist}>
              +
            </button>
          </div>
          <List itemlist={itemlist} updateItemlist={updateItemlist} />
        </div>
      </header>
    </div>
  );
}

export default App;