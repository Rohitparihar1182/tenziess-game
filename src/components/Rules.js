import React from 'react';

export default function Rules(){
    return (
        <div className="rules--container flex">
            <div className="rules">
                <h1>Rules for the game</h1>
                <ul className='rules--list'>
                    <li>This is a very simple single player game</li>
                    <li>In this game you have to freeze all the dices at same number</li>
                    <li>Every time you click a dice it will freeze the dice and clicking again will reverse it</li>
                    <li>First think for a number at you want to freeze all the dices</li>
                    <li>You can choose the number having most frequency</li>
                    <li>After freezing the numbers you can roll the dice</li>
                    <li>Every time you roll the dice the roll count will increase</li>
                    <li>Once you freeze all the dices at a same number you win!!</li>
                </ul>
            </div>
        </div>
    )
}