import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    state = {
        yer: Number
    }

    receive=(value)=>{
        let val = 2020 - value;
        this.setState({yer: val})
    }

    render() {
        return (
            <div>
            <h2>Parent</h2>
            <h3>Age: {this.state.yer}</h3>
                <Child fName="Rakesh" lName="Avi" year="1997" yer={this.receive}/>
            
            </div>
        )
    }
}
