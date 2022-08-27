import React from 'react';
// import { Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar";
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Welcome from './Pages/Welcome';
// import videobackground from "./images/videobackground.mp4"

function App() {
  return (
   
    <div id="app">
      <Header />
      <div className="app__body">
        <Sidebar />   
        <Welcome/>
        <Experience/>
        <Projects/>
      </div>

    </div> 
  );
}

export default App;
