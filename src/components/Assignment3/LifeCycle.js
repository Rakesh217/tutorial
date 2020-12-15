import React, { Component } from 'react'

export default class LifeCycle extends Component {
    state={
        data: []
    }
    componentDidMount=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=15")
        .then((res)=>res.json())
        .then((ress)=>this.setState({data: ress}))
        .catch((error)=>console.log(error))
    }
    render() {
        console.log(this.state.data)
        return (
            <div>
                {this.state.data.map((value)=><p>{value.id}</p>)}
            </div>
        )
    } 
}
