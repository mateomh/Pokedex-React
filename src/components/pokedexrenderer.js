/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import PokeDexItem from './pokedexitem';

const PokedexRenderer = props => {
  const { pokemons: filteredPokemons, clickHandle } = props;

  return (
    <>
      {filteredPokemons.map(pokemon => (
        <PokeDexItem
          key={pokemon.name}
          clickFcn={clickHandle}
          image={pokemon.imagesm}
          name={pokemon.name}
          number={pokemon.id}
        />
      ))}
    </>
  );
};

PokedexRenderer.propTypes = {
  pokemons: PropTypes.array.isRequired,
  clickHandle: PropTypes.func.isRequired,
};

export default PokedexRenderer;
