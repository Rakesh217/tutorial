import React, { Component } from 'react'

export default class CompA extends Component {
    state={
        Data: [{name: "Ram", id: 1}, {name: "Hanuman", id: 3}, {name: "Mahesh", id: 4}, {name: "Krishna", id: 2}]
    }

    render() {
        return (
            <div>
                <p>Component Less Than 100</p>
                {this.state.Data.map((dataList) => <li key={dataList.id.toString()}>{dataList.name}</li>)}
            </div>
        )
    }
}
