import React, { Component } from 'react'
import Comp from './Comp'

export default class Form extends Component {
    state={
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber:Number,
        option: "Male",
        checkbox: false,
        display: false,
        girls: [       
            {name: 'leo', age: 4},       
            {name: 'hash', age: 20},       
            {name: 'mike', age: 9},       
            {name: 'Amy', age: 33}
        ],
        array:[]
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
        this.setState({display: false})
        console.log(this.state.option)
    }
    handleCheck=(e)=>{
        this.setState({checkbox: e.target.checked})
    }
    handleClick=(e)=>{
        this.setState({display: true})
        this.setState({array: this.state.girls.filter((value)=>value.name.includes("m"))})
        console.log(this.state.array)
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form>
                    <label>First Name: </label>
                    <input name="firstName" type="text" onChange={this.handleChange}/>
                    <label>Last Name: </label>
                    <input name="lastName" type="text" onChange={this.handleChange}/>
                    <label>Email: </label>
                    <input name="email" type="email" onChange={this.handleChange}/>
                    <label>Phone Number: </label>
                    <input name="phoneNumber" type="number" onChange={this.handleChange}/>
                    <label>Gender</label>
                    <select name="option" onChange={this.handleChange}>
                    <option selected value="Male">Male</option>
                    <option value="Female">Female</option>
                    </select>
                    <label>Remember Me</label>
                    <input name="checkbox" type="checkbox" checked={this.state.checkbox} onChange={this.handleCheck}/>
                    <button onClick={this.handleClick}>Click</button>
                </form>
                {this.state.display?<p>{this.state.firstName +this.state.lastName +this.state.email + this.state.phoneNumber + this.state.option}</p>:null}
                {this.state.display?<p>{this.state.checkbox?<p> Remember </p>:<p> DoNot Remember</p>}</p>:null}
                {this.state.display?<p>{this.state.array}</p>:null}
            </div>
        )
    }
}
