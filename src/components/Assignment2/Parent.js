import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    state={
        Data:{
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        Received:{}
    }

    receive=(input)=>{
        this.setState({Received: input})
    }
    render() {
        return (
            <div>
                <h2>Parent</h2>
                {this.state.Received.userId}
                {this.state.Received.id}
                {this.state.Received.title}
                {this.state.Received.body}
                <Child data={this.state.Data} Dat={this.receive}/>
            </div>
        )
    }
}
