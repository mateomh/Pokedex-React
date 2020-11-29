const defaultstate = [];

const pokedexReducer = (state = defaultstate, action) => {
  const { type, payload: pokemon } = action;
  switch (type) {
    case 'ADD_POKEMON':
      return pokemon;
    case 'CHANGE_POKEMON':
      return state;
    default:
      return state;
  }
};

export default pokedexReducer;
