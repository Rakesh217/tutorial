import React, { Component } from 'react'
import Child from './Child'
import _ from 'lodash'
import Comp from './Comp'

export default class Parent extends Component {
    state={
        
    }
    receive1=(data)=>{
        this.setState(data)
    }

    render() {
        console.log(this.state.length);
        return (
            <div>
                <Child testInfo1={this.receive1}/>
                {
                !_.isEmpty(this.state)?<div>
                <h2>1st Data</h2>
                <p>{this.state.testData1.userId}</p>
                <p>{this.state.testData1.id}</p>
                <p>{this.state.testData1.title}</p>
                <h2>2st Data</h2>
                <p>{this.state.testData2.userId}</p>
                <p>{this.state.testData2.id}</p>
                <p>{this.state.testData2.title}</p></div>:null
                }
                <Comp/>
            </div>
        )
    }
}
