import React, { Component } from 'react'
import axios from 'axios'
class StatesView extends Component {

    constructor(props){
        super(props);
        this.state = {
            loading: true,
            StateData: null
        }
    }

    async componentDidMount(){
        const response = await fetch("https://api.covid19india.org/data.json");
        const data = await response.json();
        this.setState({StateData: data.statewise, loading: false})
        console.log(this.state.StateData)
    }
 
    render(){
        if(this.state.loading === false){
            return (
                <div>
                <div className="container">
                <div className="row">
                <div className="col shadow-md p-2 rounded" style={{background: "#e0e0e0", margin: 5, padding: 10, fontSize: 12}}>State/UT</div>
                <div className="col shadow-md p-2 rounded" style={{background: "#e0e0e0", margin: 5, padding: 10, fontSize: 12}}>Confirmed</div>
                <div className="col shadow-md p-2 rounded" style={{background: "#e0e0e0", margin: 5, padding: 10, fontSize: 12}}>Active</div>
                <div className="col shadow-md p-2 rounded" style={{background: "#e0e0e0", margin: 5, padding: 10 , fontSize: 12}}>Recovered</div>
                <div className="col shadow-md p-2 rounded" style={{background: "#e0e0e0", margin: 5, padding: 10, fontSize: 12}}>Deceased</div>
                </div>
                    </div>
                {this.state.StateData.map((sdata) => (
                        <div>
                        <div className="container">
                            <div className="row">
                            <div className="col shadow-md p-2 rounded" style={{background: "#e0e0e0", margin: 5, padding: 10 , fontSize: 12}}>{sdata.state}</div>
                            <div className="col shadow-md p-2 rounded" style={{background: "#f7f7f7", margin: 5, padding: 10, fontSize: 12}}>{sdata.confirmed}</div>
                            <div className="col shadow-md p-2 rounded" style={{background: "#f7f7f7", margin: 5, padding: 10, fontSize: 12}}>{sdata.active}</div>
                            <div className="col" style={{background: "#f7f7f7", margin: 5,  padding: 10, fontSize: 12}}>{sdata.recovered}</div>
                            <div className="col" style={{background: "#f7f7f7", margin: 5,  padding: 10, fontSize: 12}}>{sdata.deaths}</div>
                            </div>
                        </div>
                        </div>
    ))}
                </div>
            );
        }
        return (
            <div>loading ....</div>
        );
    }
}

export default StatesView