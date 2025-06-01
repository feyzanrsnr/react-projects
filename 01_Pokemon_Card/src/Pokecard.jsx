import React from 'react'

const POKE_API =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'

function Pokecard({id, name, type, exp}) {
    const imgSrc = `${POKE_API}${id}.png`

  return (
    <div className='Pokecard'>
    <h1 className='Pokecard-title'>{name}</h1>
    <div className='Pokecard-image'>
        <img src={imgSrc} alt={name} />
    </div>
    <div className='Pokecard-data'>Type:{type}</div>
    <div className='Pokecard-data'>EXP:{exp}</div>
    </div>
  )
}

export default Pokecard