/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as ApiComms from '../modules/apicomms';
import * as Actions from '../actions/actions';
import PokeDexItem from './pokedexitem';
import AppStyles from './styles/app.module.css';
import PokeFilter from './pokefilter';

const PokeDex = props => {
  const { pokemons, page } = props;

  const clickHandle = selectedPokemon => {
    const pokemonInfo = pokemons.find(pokemon => pokemon.name === selectedPokemon);

    props.updatePokemon(pokemonInfo);
    props.history.push('/info');
  };

  const sortedPokemons = pokemons.sort((a, b) => a.id - b.id);

  return (
    <>
      <PokeFilter />
      {sortedPokemons.map((pokemon, index) => (
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
  page: state.page,
});

PokeDex.propTypes = {
  pokemons: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  updatePokemon: PropTypes.func.isRequired,
  addPokemon: PropTypes.func.isRequired,
  history: PropTypes.any.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeDex);
