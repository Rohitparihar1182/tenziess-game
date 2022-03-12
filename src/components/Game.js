import React from 'react';
import Confetti from "react-confetti";

function Game(props) {
    return (
        <div className="game">
            {props.tenzie && <Confetti width={window.innerWidth}/>}
            <main>               
                <div className="title-container">
                    <p>{props.rollsText}</p>
                    {!props.tenzie && <p>All time Best : {props.best}</p>}
                </div>
                <div className="dice-container">{props.diceElements}</div>
                <button className="btn" onClick={props.rollDice}>
                    {props.tenzie ? "New Game" : "Roll"}
                </button>
            </main>
        </div>
    );
}

export default Game;