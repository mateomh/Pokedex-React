const defaultstate = [];

const pokedexReducer = (state = defaultstate, action) => {
  const { type, payload: pokemon } = action;
  switch (type) {
    case 'ADD_POKEMON':
      return state.concat(pokemon);
    default:
      return state;
  }
};

export default pokedexReducer;
