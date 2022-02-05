import React from "react";
import { nanoid } from "nanoid";
import Die from "./components/Die";
import "./App.css";
import Nav from './components/Nav'
import { BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import Game from "./components/Game";
import Rules from "./components/Rules";
import About from "./components/About"
import Contact from "./components/Contact";

export default function App() {
    const [dice, setDice] = React.useState(allNewDice());
    const [tenzie, setTenzie] = React.useState(false)
    const [rolls, setRolls] = React.useState(1)
    const [rollsText, setRollsText] = React.useState("No of rolls :")
    const [best, setBest] = React.useState()

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
            setRolls(prevRolls=>prevRolls+1)
            setRollsText(`No of rolls : ${rolls}`)
        }
        else{
            setDice(allNewDice())
            setTenzie(false)
            setRollsText('No of rolls :')
            setRolls(1)
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
            setRollsText(`You won the game in ${rolls-1} rolls`)
            if(localStorage.getItem('allTimeBest')){
                if(localStorage.getItem('allTimeBest')>rolls-1){
                    localStorage.setItem('allTimeBest',rolls-1)
                }
            }
            else{
                localStorage.setItem('allTimeBest',rolls-1)   
            }
        }
        if(localStorage.getItem('allTimeBest')){
            setBest(localStorage.getItem('allTimeBest'))
        }
    }, [dice,rolls])
    
    return (
        <div className="App">
        <Router>
            <Nav/>
            <Routes>
                <Route path='/' element={
                    <Game 
                        rollsText={rollsText}
                        diceElements={diceElements}
                        rollDice={rollDice}
                        tenzie={tenzie}
                        best={best}
                    />
                } />
                <Route path="about" element={<About/>}/>
                <Route path="rules" element={<Rules/>} />
                <Route path="contact" element={<Contact/>}/>
            </Routes>
        </Router>
        </div>
    );
}
