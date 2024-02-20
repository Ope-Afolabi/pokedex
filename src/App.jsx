import React, {useState} from 'react';
import './App.css';
import { PokeCard, Pokedex } from './components'

function App() {
  const [pokemon, setPokemon] = useState([
    
      {
        id: 1,
        name: "Charmander",
        type: "fire",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      },
      {
        id: 2,
        name: "Squirtle",
        type: "water",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      },
      {
        id: 3,
        name: "Butterfree",
        type: "flying",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      },
      {
        id: 4,
        name: "Rattata",
        type: "normal",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
      },
      {
        id: 5,
        name: "Metapod",
        type: "bug",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
      },
    ]);

  return (
    <div>
      <h1 className='pokemon-title'>Pokedex</h1>
    <Pokedex pokemon={pokemon} />
    </div>
  );
}

export default App;
