/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useStore, useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as ApiComms from '../apicomms/apicomms';
import PokeDexItem from './pokedexitem';
import TypeBadge from './typebadge';
import AppStyles from './styles/app.module.css';
import PokeInfo from './pokeinfo';

const PokeDex = props => {
  const { pokemons } = props;
  console.log(pokemons);
  return (
    <div className={AppStyles.Container}>
      {pokemons.map((pokemon, index) => (
        <PokeDexItem key={pokemon.name} name={pokemon.name} number={index} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  pokemons: state.pokemons,
});

PokeDex.propTypes = {
  pokemons: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(PokeDex);
