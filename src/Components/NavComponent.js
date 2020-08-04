import React, { Component } from 'react'
import { Navbar, NavbarBrand} from 'reactstrap'
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
            <div className="container ">
            <NavbarBrand style={{color: "white"}}>Covid19Tracker.ind</NavbarBrand>
              <Lottie
                      options={defaultOptions}
                      height={100}
                      width={100}
                     style={{textAlign: "right"}}></Lottie>
            </div>
          </Navbar>
        )
    }

};

export default NavComponent