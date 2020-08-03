import React, { Component } from 'react';
import NationData from './Components/IndiaDataCompnent';
import { Navbar, NavbarBrand} from 'reactstrap'
import './App.css';


class App extends Component {

render(){
  var d = new Date();
  return (
    <div className="App">
        <Navbar  dark={true} style={{background: "black"}}>
          <div className="container">
          <NavbarBrand style={{color: "white"}}>Covid19Tracker</NavbarBrand>
          </div>
        </Navbar>
        <p style={{textAlign: "center"}}>{d.toLocaleString()}</p>
        <NationData />
    </div>
  );
}
}

export default App;
