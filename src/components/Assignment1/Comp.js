import React, { Component } from 'react'
import CompA from './CompA'
import CompB from './CompB'

export default class Comp extends Component {
    state={
        number: 1
    }

    handleChange=(e)=>{
        this.setState({number: e.target.value})
    }

    render() {
        return (
            <div>
                <form><label>Name: </label>
                <input type="text" onChange={this.handleChange}/>
                </form>
                {(this.state.number<100)?<CompA/>: <CompB/> }
            </div>
        )
    }
}
