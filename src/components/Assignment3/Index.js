import React, { Component } from 'react'

export default class Index extends Component {
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
            { name: "Africa", continent: 'Africa'},        
            { name: "Scotland", continent: 'Europe'},        
            { name: "INDIA", continent: 'Asia'},        
            { name: "London", continent: 'Europe'}    
        ],
    }

    result =()=>{
        let val = this.state.girls.filter((value)=><li>{value.name.contains("m")}</li>)
        return val
    }
    render() {
        return (
            <div>
                {this.result}
            </div>
        )
    }
}
