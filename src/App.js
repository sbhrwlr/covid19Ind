import React, { Component } from 'react';
import NationData from './Components/IndiaDataComponent';
import StatesView from './Components/IndiaStatesComponent'
import './App.css';
import NavComponent from './Components/NavComponent'

class App extends Component {



render(){
  var d = new Date();
  return (
    <div className="App">
        <NavComponent/>
        <p style={{textAlign: "center", margin:20}}>{d.toLocaleString()}</p>
        <NationData />
        <StatesView/>
    </div>
  );
}
}

export default App;
