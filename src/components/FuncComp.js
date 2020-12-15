import React from 'react';

export default function FuncComp(props){

    let sendData=()=>{
        let car = "Honda";
        props.car(car)
    }
    return(
        <div>
        <p>Child</p>
        {props.name}
        {//<button onClick={sendData}>Click Here</button>
    }
        </div>
    )
}