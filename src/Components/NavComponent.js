import React, { Component } from 'react'
import { Navbar, NavbarBrand,Nav, NavItem, NavLink} from 'reactstrap'
import Lottie from 'react-lottie'
import animdata from './logo.json'
import logo from './virus.png'
import { Button } from "reactstrap";
import app from './app-debug.apk'
class NavComponent extends Component {

    render(){
        const defaultOptions = {
            loop: true,
            animationData: animdata,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
        };
        return (
            <div>
                        <Navbar  dark={true} style={{background: "black"}}>
            <div className="container-fluid ">
            <NavbarBrand style={{color: "white"}}><img src={logo} style={{height: 30 , margin: "auto auto"}}/>Covid19 Tracker</NavbarBrand>
              <Lottie

                      options={defaultOptions}
                      height={100}
                      width={100}
                     style={{textAlign: "right"}}></Lottie>
            </div>
          
          </Navbar>
          
          <Button color="primary" style={{marginTop: 5}}><a href={app} download style={{color: "white"}}>Android App</a></Button>
            </div>
        )
    }

};

export default NavComponent