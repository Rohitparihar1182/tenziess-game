import React from 'react';

export default function Die(props){
    const style={
        backgroundColor:props.die.isHeld?'#59E391':'#fff'
    }
    return (
        <div
            style={style}  
            className="dice flex"
            onClick={props.holdDie}
        >
            <h2>{props.die.value}</h2>
        </div>
    )
}