import React, { Component } from 'react'

  
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
                <div className="col shadow-md p-2 rounded" style={{background: "#e0e0e0", margin: 5, padding: 10, fontSize: 12, fontWeight: 'bold'}}>State/UT</div>
                <div className="col shadow-md p-2 rounded" style={{background: "#e0e0e0", margin: 5, padding: 10, fontSize: 12, fontWeight: 'bold'}}>Confirmed</div>
                <div className="col shadow-md p-2 rounded" style={{background: "#e0e0e0", margin: 5, padding: 10, fontSize: 12, fontWeight: 'bold'}}>Active</div>
                <div className="col shadow-md p-2 rounded" style={{background: "#e0e0e0", margin: 5, padding: 10 , fontSize: 12, fontWeight: 'bold'}}>Recovered</div>
                <div className="col shadow-md p-2 rounded" style={{background: "#e0e0e0", margin: 5, padding: 10, fontSize: 12, fontWeight: 'bold'}}>Deceased</div>
                </div>
                    </div>
                {this.state.StateData.map((sdata) => (
                        <div>
                        <div className="container">
                            <div className="row">
                            <div className="col shadow-md p-2 rounded" style={{background: "#e0e0e0", margin: 5, padding: 10 , fontSize: 12, wordWrap: "break-word", fontWeight: 'bold'}}>{sdata.state}</div>
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