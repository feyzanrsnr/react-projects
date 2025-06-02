import React from 'react'
import './Coin.css'

function Coin({currCoin}) {
  return (
    <div className='Coin'>
        <img src={currCoin.imgSrc} alt={currCoin.side} />
    </div>
  )
}

export default Coin