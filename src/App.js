import React, { useState, useEffect } from 'react';
import './App.css';
//import Home from "./view/Home";
import Card from "./components/Card";
//import Nav from "./Components/nav";

    function App() {

        //return data; // dit in Card.js steken samen met de fetch en dan in Home.js returnen in <main id="box">tags
       return( //<Home />
           <main id="box"><Card /></main>
       );
}
export default App;
