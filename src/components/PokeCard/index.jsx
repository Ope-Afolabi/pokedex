import React from 'react'

const PokeCard = ({pokemon}) => {

  return (
    <div className='pokecard'>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>Type: {pokemon.type}</p>
    </div>
  )
}

export default PokeCard