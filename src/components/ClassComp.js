import React, {Component} from 'react';
import FuncComp from './FuncComp';

export default class ClassComp extends Component{
    state = {
        car: ""
    }
    recivedData=(input)=>{
        this.setState({car: input})
    }
    render(){
        return(
            <div>
            <p>Parent</p>
            <FuncComp name="Rakesh" car={this.recivedData}/>
            {this.state.car}
            </div>
        );
    }
}