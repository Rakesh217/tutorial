import React, { Component } from 'react'

export default class Input extends Component {
    state={
        fName: "",
        email: "",
        phoneNumber: Number,
        password: "",
        data: []
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit=(e)=>{
        let myHeader = new Headers();
        myHeader.append("Content-Type", "application/json")
        fetch(("localhost:8000/adduser"),{
            method: "POST",
            body: JSON.stringify(this.state),
            headers: myHeader
        })
        e.preventDefault();
    }
    componentDidMount(){
        let myHeader = new Headers();
        myHeader.append("Content-Type", "application/json")
        fetch("localhost:8000/getuser",{
            method: "GET",
            headers: myHeader
        })
        .then((res)=> res.json)
        .then((ress)=>this.setState({data: ress}))
        .catch((error)=>console.log(error))
    }

    render() {
        console.log(this.state.email)
        return (
            <div>
            <form>
            <label>
            Name:
            <input type="text" name="fName" onChange={this.handleChange}/>
            </label>
            <label>
            Email:
            <input type="email" name="email" onChange={this.handleChange}/>
            </label>
            <label>
            Phone Number:
            <input type="text" name="phoneNumber" onChange={this.handleChange}/>
            </label>
            <label>
            Password:
            <input type="text" name="password" onChange={this.handleChange}/>
            </label>
            <input type="submit" onClick={this.handleSubmit}/>
            </form>

            {this.state.data.map((value) => <p>{value}</p>)}
            </div>
        )
    }
}
