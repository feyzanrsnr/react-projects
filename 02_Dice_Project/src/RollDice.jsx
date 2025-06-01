import React,{useState} from 'react'
import './RollDice.css'
import Dice from './Dice'

function RollDice() {
    const sides = ["one", "two", "three", "four", "five", "six"]
    
    const [diceOne, setDiceOne] = useState("one")
    const [diceTwo, setDiceTwo] = useState("two")
    const [rolling, setRolling] = useState(false)

    const roll = () => {
        const newDiceOne = sides[Math.floor(Math.random() * sides.length)]
        const newDiceTwo = sides[Math.floor(Math.random() * sides.length)]
        
        setDiceOne(newDiceOne)
        setDiceTwo(newDiceTwo)
        setRolling(true)

        setTimeout(() => {
            setRolling(false)
        },1000)
    }
    

  return (
    <div className='RollDice'>
    <div className='RollDice-container'>
    <Dice face={diceOne} rolling={rolling}/>
    <Dice face={diceTwo} rolling={rolling}/>
    </div>
    <button onClick={roll} disabled={rolling}>
        {
            rolling ? "Hoooop" : "Salla"
        }
    </button>
    </div>
  )
}

export default RollDice