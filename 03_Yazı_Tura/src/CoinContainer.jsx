import React, {useState } from 'react'
import { choice } from './Helpers'
import Coin from './Coin'
import './CoinContainer.css'

function CoinContainer() {
    const coins = [
      {
        side: 'tails',
        imgSrc:
          'https://upload.wikimedia.org/wikipedia/commons/6/64/1TL_obverse.png',
      },
      {
        side: 'heads',
        imgSrc:
          'https://play-lh.googleusercontent.com/XqQPFaIqg5vEiB316LM5eOHThuZHt1ZIVleJ0_hX4LrhJdG6le951ybCszG0w5AKl_-i',
      },
    ]

    const [currCoin, setCurrCoin] = useState(null)
    const [nFlips, setNFlips] = useState(0)
    const [nTails, setNTails] = useState(0)
    const [nHeads, setNHeads] = useState(0)

    const flipCoin = () => {
        const newCoin = choice(coins)
        setCurrCoin(newCoin)
        setNFlips(nFlips + 1)
        setNHeads(nHeads + (newCoin.side === 'heads' ? 1 : 0))
        setNTails(nTails + (newCoin.side === 'tails' ? 1 : 0))
    }

    const handleClick = () => {
        flipCoin()
    }

  return (
    <div className='CoinContainer'>
        <h1>Madeni Para Oyunu</h1>
        {
            currCoin && <Coin currCoin={currCoin} />
        }
        <button onClick={handleClick}>Fırlat!</button>
        <p>Yapılan toplam fırlatma {nFlips}, bunların {nTails} tanesi yazı ve {nHeads} tanesi tura.</p>
    </div>
  )
}

export default CoinContainer