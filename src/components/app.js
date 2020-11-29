/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import * as ApiComms from '../apicomms/apicomms';
import PokeDexItem from './pokedexitem';
import TypeBadge from './typebadge';
import AppStyles from './styles/app.module.css';
import PokeInfo from './pokeinfo';

const App = () => {
  const [state, setState] = useState([]);

  const fillData = pokemons => {
    console.log(pokemons);
  };

  const clickHandle = async event => {
    const { results: pokemons } = await ApiComms.getPokemons(1);
    fillData(pokemons);
    // console.log(pokemons);
    // const pokemon = await ApiComms.getOnePokemonInfo('bulbasaur');
    // const { sprites: { other: { dream_world: { front_default: image } } } } = pokemon;
    // console.log(pokemon);
  };

  const img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
  const img2 = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg';
  const name = 'Hola';
  const number = 155;

  return (
    <div className={AppStyles.Container}>
      <button type="button" onClick={clickHandle}>Test API</button>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="pokemon" />
      <img width="150px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="pokemon" />
      <PokeDexItem name={name} number={1} />
      {/* <TypeBadge type="ghost" />
      <PokeDexItem image={img} name={name} number={1} />
      <PokeDexItem image={img} name={name} number={2} />
      <PokeDexItem image={img} name={name} number={3} />
      <PokeDexItem image={img} name={name} number={4} />
      <PokeDexItem image={img} name={name} number={5} />
      <PokeDexItem image={img} name={name} number={6} />
      <PokeDexItem image={img} name={name} number={7} />
      <PokeDexItem image={img} name={name} number={8} />
      <PokeDexItem image={img} name={name} number={9} />
      <PokeDexItem image={img} name={name} number={10} /> */}
      {/* <PokeInfo
        name={name}
        image={img2}
        type1="ghost"
        // type2="normal"
        height={11}
        weight={320}
      /> */}
    </div>
  );
};

export default App;
