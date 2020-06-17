import React from 'react';
import Qualities from './Components/Qualities';
import Reference from './Components/Reference';
import PersonalInfo from './Components/PersonalInfo';
import Objective from './Components/Objective';
import Experience from './Components/Experience';
import './App.css';
import Education from './Components/Education';

import Multistep from './Components/Multistep';




function App() {
  return (
    <div className="App">
      <h1 id="heading" >cvmaker</h1>
        <Multistep/>
    </div>
  );
}

export default App;
