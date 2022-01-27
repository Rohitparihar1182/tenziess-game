import React from "react";
import { nanoid } from "nanoid";
import Die from "./components/Die";
import "./App.css";

export default function App() {
    const [dice, setDice] = React.useState(allNewDice());
    const [tenzie, setTenzie] = React.useState(false)

    const diceElements = dice.map((die) => (
        <Die key={die.id} die={die} holdDie={() => holdDice(die.id)} />
    ));

    function generateNewDie() {
        return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
        };
    }

    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
          newDice.push(generateNewDie());
        }
        return newDice;
    }

    function rollDice(e) {
        if(e.target.textContent==='Roll'){
            setDice((oldDice) =>
                oldDice.map((die) => {
                    return die.isHeld ? die : generateNewDie();
                })
            );
        }
        else{
            setDice(allNewDice())
            setTenzie(false)
        }
    }
    function holdDice(id) {
        setDice((oldDice) =>
            oldDice.map((die) => {
                return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
            })
        );
    }
    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzie(true)
            console.log("You won!")
            alert('Cheers! you won🎉🎉')
        }
    }, [dice])

    return (
        <main>
            <div className="title-container">
                <h1 className="title">Tenzies</h1>
                <p className="instructions">
                    Roll until all dice are the same. Click each die to freeze it at its
                    current value between rolls.
                </p>
            </div>
            <div className="dice-container">{diceElements}</div>
            <button className="btn" onClick={rollDice}>
                {tenzie ? "Reset" : "Roll"}
            </button>
        </main>
    );
}
