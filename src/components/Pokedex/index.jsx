import React from 'react'
import PokeCard from '../PokeCard';

const Pokedex = ({pokemon}) => {
     
  return (
    <div className='pokedex'> 
    {pokemon.map((poke) => (
      <PokeCard key={poke.id} pokemon={poke} />
    ))}
    </div>
  )
}

export default Pokedex;