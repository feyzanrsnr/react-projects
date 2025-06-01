import React from 'react'
import './Dice.css'

function Dice({face,rolling}) {
    const cls = `fa-solid fa-8x fa-dice-${face} ${rolling && "shaking" } Dice`
  return (
    
    <>
    <i className={cls}></i>
    </>
  )
}

export default Dice