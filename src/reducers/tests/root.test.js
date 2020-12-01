import rootReducer from '../root';

describe('Pokedex Reducer', () => {
  it('1. Checks the all the default states are returned', () => {
    const mockState = undefined;
    const mockAction = { type: 'any' };
    const expectedState = {
      filter: 'All',
      pokemons: [],
      page: 1,
      currentPokemon: {},
    };
    const state = rootReducer(mockState, mockAction);
    expect(state).toStrictEqual(expectedState);
  });

  it(
    '2. Checks all the default actions for each reducer, should return given state',
    () => {
      const mockAction = { type: 'any' };
      const mockState = {
        filter: 'My Filter',
        pokemons: ['My Pokemons'],
        page: 50,
        currentPokemon: 'Defaulty',
      };
      const state = rootReducer(mockState, mockAction);
      expect(state).toStrictEqual(mockState);
    },
  );

  it(
    '3. Checks the CHANGE_FILTER action of the filter reducer',
    () => {
      const mockState = undefined;
      const mockAction = { type: 'CHANGE_FILTER', payload: 'A Filter' };
      const expectedState = {
        filter: 'A Filter',
        pokemons: [],
        page: 1,
        currentPokemon: {},
      };
      const state = rootReducer(mockState, mockAction);
      expect(state).toStrictEqual(expectedState);
    },
  );

  it(
    '4. Checks the ADD_POKEMON action of the pokedex reducer',
    () => {
      const mockState = undefined;
      const mockAction = { type: 'ADD_POKEMON', payload: 'Defaulty' };
      const expectedState = {
        filter: 'All',
        pokemons: ['Defaulty'],
        page: 1,
        currentPokemon: {},
      };
      const state = rootReducer(mockState, mockAction);
      expect(state).toStrictEqual(expectedState);
    },
  );

  it(
    '5. Checks the CHANGE_POKEMON action of the pokemon reducer',
    () => {
      const mockState = undefined;
      const mockAction = { type: 'CHANGE_POKEMON', payload: 'Defaulty' };
      const expectedState = {
        filter: 'All',
        pokemons: [],
        page: 1,
        currentPokemon: 'Defaulty',
      };
      const state = rootReducer(mockState, mockAction);
      expect(state).toStrictEqual(expectedState);
    },
  );

  it(
    '6. Checks the CHANGE_PAGE action of the pokemon reducer',
    () => {
      const mockState = undefined;
      const mockAction = { type: 'CHANGE_PAGE', payload: 50 };
      const expectedState = {
        filter: 'All',
        pokemons: [],
        page: 50,
        currentPokemon: {},
      };
      const state = rootReducer(mockState, mockAction);
      expect(state).toStrictEqual(expectedState);
    },
  );
});
