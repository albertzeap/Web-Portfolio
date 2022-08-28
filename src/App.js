import React from 'react';

import './App.css';
import Header from "./Components/Header"
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Welcome from './Pages/Welcome';




function App() {
  
  return (
 
    <div id="app">
      <Header />
      <div className="app__body">
        {/* <Sidebar />    */}
        <Welcome/>
        <Experience/>
        <Projects/>
      </div>

    </div> 

  );
}

export default App;
