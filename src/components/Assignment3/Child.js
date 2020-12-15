import React, { Component } from 'react'

export default class Child extends Component {
    state={
        testData1: {
            "userId": 1, "id": 2, "title": "qui est esse"
        },
        testData2: {    
            "userId": 2, "id": 2, "title": "qui est esse"  
        }
    }

    handleClick=()=>{
        this.props.testInfo1(this.state)
        // this.props.testInfo2(this.state.testData2)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
