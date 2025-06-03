import React, { useState } from 'react'
import Box from './Box'
import './BoxContainer.css'

function BoxContainer() {
    const allColors = [
        "purple",
        "magenta",
        "lilac",
        "pink",
        "red",
        "blue",
        "green",
        "orange",
        "brown",
        "violet"
    ]

    const [numBoxes, setNumBoxes] = useState(30)
    
    const boxes = Array.from({length:numBoxes}).map(() => (<Box colors={allColors}/>))
  return (
    <div className='BoxContainer'>
        {boxes}
    </div>
  )
}

export default BoxContainer