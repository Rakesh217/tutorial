import React, { Component } from 'react'

export default class Fetch extends Component {
    state={
        data: []
    }
    // handleClick=()=>{
    //     fetch("https://jsonplaceholder.typicode.com/posts/1")
    //     .then((res)=>res.json())
    //     .then((ress)=>this.setState({data: ress}))
    //     .catch((error)=>console.log(error));
    // };
    handleClick=()=>{
        let myHeader = new Headers();
        myHeader.append("Content-Type", "application/json");
        let apiPath = "https://jsonplaceholder.typicode.com/posts/1";
        let fromBody = {
            id: 1,
            title: 'foo',    
            body: 'bar',    
            userId: 1,
        };

        fetch(apiPath, {
            method: "GET",
            headers: myHeader
        })
        .then((res)=>res.json())
        .then((resu)=>this.setState({data :resu}))
        .catch((error)=>console.log(error));

        // fetch(apiPath, {
        //     method: "POST",
        //     body: JSON.stringify(fromBody),
        //     headers: myHeader
        // })
        // .then((res)=>res.json())
        // .then((resu)=>this.setState({data :resu}))
        // .catch((error)=>console.log(error));

        // fetch(apiPath, {
        //     method: "PUT",
        //     body: JSON.stringify(fromBody),
        //     headers: myHeader
        // })
        // .then((res)=> res.json())
        // .then((ress)=> this.setState({data: ress}))
        // .catch((error)=>console.log(error));

        // fetch(apiPath, {
        //     method: "DELETE",
        //     headers: myHeader
        // }).catch((error)=>console.log(error));
    }

    render() {
        console.log(this.state.data)
        return (
            <div>
                <button onClick={this.handleClick}>Click</button>
                <p>{this.state.data.userId}</p>
                <p>{this.state.data.title}</p>
                <p>{this.state.data.id}</p>
                <p>{this.state.data.body}</p>
            </div>
        )
    }
}
