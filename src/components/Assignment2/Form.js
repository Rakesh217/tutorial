import React, {Component} from 'react'

export default class Form extends Component{
    state={
        firstName: "",
        lastName: "",
        checkbox: false,
        option: "Male",
        display: false
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
        this.setState({display: false})
    }

    handleInputChange=(e)=>{
        this.setState({checkbox: e.target.checked})
    }

    handleSubmit=(e)=>{
        this.setState({display: true})
        e.preventDefault()
    }

    render(){
        return(
            <div>
            <form>
                <label>FirstName: </label>
                <input name="firstName" type="text" onChange={this.handleChange}/>
                <label>LastName: </label>
                <input name="lastName" type="text" onChange={this.handleChange}/>
                <input type="submit" onClick={this.handleSubmit}/>
                <label>Idiot</label>
                <input name="checkbox" type="checkbox" checked={this.state.checkbox} onChange={this.handleChange}/>
            <select value={this.state.option} name="option" onChange={this.handleChange}>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            </select>
            </form>
            {this.state.display? <p>FullName: {this.state.firstName} {this.state.lastName} is {this.state.option} and {this.state.checkbox?<p>Idiot</p>:<p>Not Idiot</p>}</p>: null}

            </div>
        )
    }
}