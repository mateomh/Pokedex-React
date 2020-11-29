/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import * as ApiComms from '../apicomms/apicomms';

const App = () => {
  const clickHandle = async event => {
    const pokemons = await ApiComms.getPokemons(2);
    console.log(pokemons);
    const pokemon = await ApiComms.getOnePokemonInfo('bulbasaur');
    const { sprites: { other: { dream_world: { front_default: image } } } } = pokemon;
    console.log(pokemon);
  };

  return (
    <div>
      <button type="button" onClick={clickHandle}>Test API</button>
      {/* <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="pokemon" /> */}
      <img width="150px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="pokemon" />
    </div>
  );
};

export default App;
