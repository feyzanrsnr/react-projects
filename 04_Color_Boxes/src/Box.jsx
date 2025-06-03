import React, { useState } from 'react'
import { choice } from './Helpers'
import './Box.css'

function Box({colors}) {
    
    const [color, setColor] = useState(choice(colors))


    const handleClick = () => {
        pickColor()
    }

    const pickColor = () => {
        let newColor = null
        do{
            newColor = choice(colors)
        }
        while(newColor === color)
        setColor(newColor)
        // console.log(color)
    }

  return (
    <div 
    className='Box' 
    style={{backgroundColor: color}}
    onClick={handleClick}
    >
        
    </div>
  )
}

export default Box