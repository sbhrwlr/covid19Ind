import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class NationData extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            IndData: null
        }
    }

    async componentDidMount(){
        const response = await fetch("https://api.covid19india.org/v4/data.json");
        const data = await response.json();
        this.setState({IndData: data.TT.total, loading: false})
        console.log(this.state.IndData)
    }

    render(){
        return (
            <div className="container-fluid">
                <div>
                {this.state.loading || !this.state.IndData ? (
                    <div>loading ...</div>
                ) :

            <div>
                <div className='row justify-content-center' style={{background: ""}}>
                    <div className="col-5 col-lg-2 shadow-lg p-4 mb-5 bg-white rounded" style={{textAlign: "center", color: "red", marginLeft: 10, marginRight:10, marginTop: 5, boxShadow: "1px 1px 2px black"}}>
                        <h6 style={{fontSize: 14}}>Confirmed</h6>
                        <h2>{this.state.IndData.confirmed}</h2>
                    </div>
                    <div className="col-5 col-lg-2 shadow-lg p-4 mb-5 bg-white rounded" style={{textAlign: "center", color: "blue", marginLeft: 10, marginRight:10, marginTop: 5, boxShadow: "1px 1px 2px black"}}>
                        <h6 style={{fontSize: 14}}>Active</h6>
                        <h2>{this.state.IndData.confirmed - this.state.IndData.recovered - this.state.IndData.deceased - this.state.IndData.other}</h2>
                    </div>
                    <div className="col-5 col-lg-2 shadow-lg p-4 mb-5 bg-white rounded" style={{textAlign: "center", color: "green", marginLeft: 10, marginRight:10, marginTop: 0, boxShadow: "1px 1px 2px black"}}>
                        <h6 style={{fontSize: 14}}>Recovered</h6>
                        <h2>{this.state.IndData.recovered}</h2>
                    </div>
                    <div className="col-5 col-lg-2 shadow-lg p-4 mb-5 bg-white rounded" style={{textAlign: "center", color: "grey", marginLeft: 10, marginRight:10, marginTop: 0, boxShadow: "1px 1px 2px black"}}>
                        <h6 style={{fontSize: 14}}>Deceased</h6>
                        <h2>{this.state.IndData.deceased}</h2>
                    </div>
                </div>
            </div>
            }
                </div>
 
            </div>
        );

        }
    }


export default NationData;