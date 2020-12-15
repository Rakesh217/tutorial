import React from 'react'

export default function Child(props) {
    let send=()=>{
        props.yer(props.year);
    }

    return (
        <div>
            <h3>Child</h3>
            <p>{props.fName}</p>
            <p>{props.lName}</p>
            <p>{props.year}</p>
            <button onClick={send}>Click</button>
        </div>
    )
}
