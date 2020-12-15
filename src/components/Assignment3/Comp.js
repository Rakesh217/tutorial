import React, { Component } from 'react'

export default class Comp extends Component {
    state={
        girls: [       
            {name: 'leo', age: 4},       
            {name: 'hash', age: 20},       
            {name: 'mike', age: 9},       
            {name: 'Amy', age: 33}
        ],
        ages: [13, 37, 11, 13, 26, 54, 20, 43, 17],
        countries: [        
        { name: "CHINA", continent: 'Asia'},        
        { name: "africa", continent: 'Africa'},        
        { name: "scottland", continent: 'Europe'},        
        { name: "IND", continent: 'Asia'},        
        { name: "london", continent: 'Europe'} 
        ],
        data :[]
    }
    filtData=()=>{
        let data = this.state.countries.filter((country)=>country.continent === "Asia")
        this.setState({data: data})
    }
    render() {
        console.log(this.state.data)
        return (
            <div>
            <button onClick={this.filtData}>C</button>
            {this.state.data.map((age)=><li>{age.name}</li>)}
            </div>

        )
    }
}
