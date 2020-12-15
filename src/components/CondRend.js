import React, { Component } from 'react'
import FuncComp from './FuncComp';
import ClassComp from './ClassComp';

export default class CondRend extends Component {
    state = {
        comp: true
    };

    handle =()=>{
        this.setState({comp: !this.state.comp});
    }
    render() {
        return (
            <div>
                <button onClick={this.handle}>Click Here</button>
                {this.state.comp ? <ClassComp/>: <FuncComp/>}
            </div>
        )
    }
}
