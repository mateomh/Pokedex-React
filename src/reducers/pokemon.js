const defaultstate = [];

const pokemonReducer = (state = defaultstate, action) => {
  const { type, payload: pokemon } = action;
  switch (type) {
    case 'ADD_POKEMON':
      return state.concat(pokemon);
    case 'CHANGE_POKEMON':
      return state;
    default:
      return state;
  }
};

export default pokemonReducer;
