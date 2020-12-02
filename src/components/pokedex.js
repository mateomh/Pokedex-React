/* eslint-disable prefer-const */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable camelcase */
import { useEffect } from 'react';
import { connect, useStore } from 'react-redux';
import PropTypes from 'prop-types';
import { dataInit } from '../modules/storeops';
import * as Actions from '../actions/actions';
import PokeDexItem from './pokedexitem';
import PokeFilter from './pokefilter';

const PokeDex = props => {
  let { pokemons, filter: filterValue } = props;
  const store = useStore();

  useEffect(() => {
    if (pokemons.length === 0) {
      dataInit(store);
    }
  }, []);

  const clickHandle = selectedPokemon => {
    const pokemonInfo = pokemons.find(pokemon => pokemon.name === selectedPokemon);

    props.updatePokemon(pokemonInfo);
    props.history.push('/info');
  };

  let filteredPokemons = pokemons;

  if (filterValue !== 'All') {
    const type1 = pokemons.filter(item => item.types[0] === filterValue);
    const type2 = pokemons.filter(item => item.types[1] === filterValue);
    filteredPokemons = [...type1, ...type2];
  }

  filteredPokemons = filteredPokemons.sort((a, b) => a.id - b.id);

  return (
    <>
      <PokeFilter />
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

const mapDispatchToProps = dispatch => ({
  updatePokemon: pokemon => dispatch(Actions.currentPokemon(pokemon)),
  addPokemon: pokemon => dispatch(Actions.addPokemon(pokemon)),
});

const mapStateToProps = state => ({
  pokemons: state.pokemons,
  filter: state.filter,
});

PokeDex.propTypes = {
  pokemons: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  updatePokemon: PropTypes.func.isRequired,
  history: PropTypes.any.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeDex);
