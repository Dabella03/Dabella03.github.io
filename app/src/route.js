import Home from "./components/Home.js";
import About from "./components/About.js";
import {
    Routes,
    Route,
  } from 'react-router-dom';
  import React from 'react';
const Router=()=>{
    return(
        <Routes>
            <Route>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            </Route>
        </Routes>
    );
};

export default Router;