const defaultstate = {};

const pokemonReducer = (state = defaultstate, action) => {
  const { type, payload: pokemon } = action;
  switch (type) {
    case 'CHANGE_POKEMON':
      return pokemon;
    default:
      return state;
  }
};

export default pokemonReducer;
