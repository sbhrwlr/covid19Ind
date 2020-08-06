import React, { Component } from 'react'
import { Navbar, NavbarBrand,Nav, NavItem, NavLink} from 'reactstrap'
import Lottie from 'react-lottie'
import animdata from './logo.json'

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
            <Navbar  dark={true} style={{background: "black"}}>
            <div className="container-fluid ">
            <NavbarBrand style={{color: "white"}}>Covid19Tracker.ind</NavbarBrand>
              <Lottie
                      options={defaultOptions}
                      height={100}
                      width={100}
                     style={{textAlign: "right"}}></Lottie>
            </div>
            <Nav>
            <NavItem>
              <a href="https://srv-file14.gofile.io/download/klerlZ/app-debug.apk" download="Track">Android App</a>
            </NavItem>            </Nav>
          </Navbar>
        )
    }

};

export default NavComponent