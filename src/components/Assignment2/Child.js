import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        Data1:{
            userId: 2,
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nquiaperiam non debitis possimus qui neque nisi nulla"
        }
    }

    send=()=>{
        this.props.Dat(this.state.Data1);
    }

    render() {
        return (
            <div>
            <h2>Child</h2>
                <p>{this.props.data.id}</p>
                <p>{this.props.data.userId}</p>
                <p>{this.props.data.title}</p>
                <p>{this.props.data.body}</p>
                <button onClick={this.send}>Click Here</button>
            </div>
        )
    }
}
