import React, { useState } from 'react'
import Ball from './Ball'
import './Lottery.css'

function Lottery({title = 'Şans Oyunu', maxBalls = 6, maxNum = 40}) {


    const [nums, setNums] = useState(Array.from({length:maxBalls}))

    const handleClick = () => {
        setNums(
            nums.map(() => Math.floor(Math.random() * maxNum) + 1)
        )
    }

  return (
    
    <div className='LotteryContainer'>
        <h1>{title}</h1>
       <div className='BallContainer'>
        
        <div className='Balls'>
            {
        nums.map((n, i) => (
            <Ball key={i} num={n}/>
        ))
        }
        </div>
        <button onClick={handleClick}>Günün Şanslı Sayıları</button>
       </div>
       
    </div>
   
    
  )
}

export default Lottery