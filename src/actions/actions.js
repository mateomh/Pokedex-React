const addPokemon = pokemon => (
  {
    type: 'ADD_POKEMON',
    payload: pokemon,
  }
);

const currentPokemon = pokemon => (
  {
    type: 'CHANGE_POKEMON',
    payload: pokemon,
  }
);

const changeFilter = filter => (
  {
    type: 'CHANGE_FILTER',
    payload: filter,
  }
);

export { addPokemon, currentPokemon, changeFilter };
