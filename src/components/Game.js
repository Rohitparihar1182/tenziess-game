import React from 'react';

function Game(props) {
    return (
        <div className="game">
            <main>               
                <div className="title-container">
                    <p>{props.rollsText}</p>
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