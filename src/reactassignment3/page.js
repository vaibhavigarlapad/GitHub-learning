
import React from "react";
//import logo from './logo.svg';
import "./App.css";
import { useEffect, useState, useRef } from "react";
import Axios from 'Axios';
//import Carousel from './Carousel.js';
//import Homepage from './reactassignment3/homepage';

function App() {
  const [ingredientList, updateIngredientList] = useState([]);
  const [Loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const APP_ID = "3b8e1c0a";
  const API_KEY = "544187ddb3b69c145cede4574d96bfb2";

  const search = () => {
    searchforrecipe(inputRef.current.value);
    inputRef.current.value = "";
  };
  
  useEffect(() => {
    const getdata = async () => {
        const result = await Axios.get(
            `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`
        );
        console.log(result.data);
        setsearchforrecipe(result.data); // set it as array, not an object
    };
    getdata();
  }, []);
  // const searchforrecipe = (query) => {
  //   setLoading(true);
  //   let  Url ='https://api.edamam.com/search?q=chicken&app_id=3b8e1c0a&app_key=544187ddb3b69c145cede4574d96bfb2';
       
  //      console.log(Url);
  //     fetch(Url,{method:'GET'})
  //     .then((response) => {
  //        return response.json();
        
  //     })
  //     .then((res) => {
  //       console.log(res.hits);
  //       updateIngredientList(res.hits);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log("error", err);
  //       setLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   searchforrecipe("chicken");
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="Input-wrapper">
          <input ref={inputRef} placeholder="search for recipe " />
          <button onClick={search}>search</button>
        </div>
        {Loading && <p>Loading...</p>}
        <div className="wrapper">
          {ingredientList.map((searchforrecipe) => {
            return (
              <div className="Ingreident">
                <span>{searchforrecipe.label}</span>
                <img src={searchforrecipe.image} />
                <div className="steps">
                  {searchforrecipe.ingredientLines.map((step,index) => {
                    return <p key={index}>{step}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}


export default App;
........
import React from "react";
//import logo from './logo.svg';
import "./App.css";
import { useEffect, useState } from "react";
//import Carousel from './Carousel.js';
//import Homepage from './reactassignment3/homepage';

function App() {
  const [ingredientList,updateIngredientList]=useState([]);
  const API_KEY= "544187ddb3b69c145cede4574d96bfb2	";
  const APP_ID = "3b8e1c0a";
  
  useEffect(() => {
    let Url ='search?q=chicken&app_id={APP_ID}&api_key={API_KEY}';
    fetch(Url,{mode : "no-cors"})
    .then(response => {
      return response.json();
    })
    .then(res => {
     console.log(res.hits);
     updateIngredientList(res.hits);
    })
    .catch(err => 
      console.log("error",err))
    
  },[]);
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
{ingredientList.map(item =>{
return(
  <div className="Ingreident">
    <span>{item.recipe.label}</span>
    <img src={item.recipe.image}/>
    {item.recipe.ingredientLines.map(step =>{
      return<p>{step}</p>;
    })}
    
    </div>
    );
  })}

        </div>
      </header>
    </div>
  );
}

export default App;
............App.............
import React from "react";
//import logo from './logo.svg';
import "./App.css";
import { useEffect, useState, useRef } from "react";
//import axios from 'axios';
//import Carousel from './Carousel.js';
//import Homepage from './reactassignment3/homepage';

function App() {
  const [ingredientList, updateIngredientList] = useState([]);
  const [Loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const APP_ID = "3b8e1c0a";
  const API_KEY = "544187ddb3b69c145cede4574d96bfb2";

  const search = () => {
    searchforrecipe(inputRef.current.value);
    inputRef.current.value = "";
  };

  const searchforrecipe = (query) => {
    setLoading(true);
    let  Url ='https://api.edamam.com/search?q=chicken&app_id=3b8e1c0a&app_key=544187ddb3b69c145cede4574d96bfb2';
       
       console.log(Url);
      fetch(Url,{method:'GET'})
      .then((response) => {
         return response.json();
        
      })
      // .then((res) => {
      //   console.log(res.hits);
      //   updateIngredientList(res.hits);
      //   setLoading(false);
      // })
      .catch((err) => {
        console.log("error", err);
        setLoading(false);
      });
  };

  // useEffect(() => {
  //   searchforrecipe("chicken");
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="Input-wrapper">
          <input ref={inputRef} placeholder="search for recipe " />
          <button onClick={search}>search</button>
        </div>
        {Loading && <p>Loading...</p>}
        <div className="wrapper">
          {ingredientList.map((searchforrecipe) => {
            return (
              <div className="Ingreident">
                <span>{searchforrecipe.label}</span>
                <img src={searchforrecipe.image} />
                <div className="steps">
                  {searchforrecipe.ingredientLines.map((step,index) => {
                    return <p key={index}>{step}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}


export default App;