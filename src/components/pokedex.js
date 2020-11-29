/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as ApiComms from '../apicomms/apicomms';
import * as Actions from '../actions/actions';
import PokeDexItem from './pokedexitem';
import AppStyles from './styles/app.module.css';

const PokeDex = props => {
  const { pokemons, page } = props;

  const clickHandle = async selectedPokemon => {
    const pokemonInfo = await ApiComms.getOnePokemonInfo(selectedPokemon);
    const {
      id,
      name,
      sprites: { front_default: imagesm },
      sprites: { other: { dream_world: { front_default: imagelg } } },
      types,
      weight,
      height,
    } = pokemonInfo;

    const pokemon = {
      id,
      name,
      imagesm,
      imagelg,
      types,
      weight,
      height,
    };
    props.updatePokemon(pokemon);
    props.history.push('/info');
  };

  return (
    <div className={AppStyles.Container}>
      {pokemons.map((pokemon, index) => (
        <PokeDexItem
          key={pokemon.name}
          clickFcn={clickHandle}
          name={pokemon.name}
          number={(index + 1) * page}
        />
      ))}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  updatePokemon: pokemon => dispatch(Actions.currentPokemon(pokemon)),
});

const mapStateToProps = state => ({
  pokemons: state.pokemons,
  page: state.page,
});

PokeDex.propTypes = {
  pokemons: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  updatePokemon: PropTypes.func.isRequired,
  history: PropTypes.any.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeDex);
