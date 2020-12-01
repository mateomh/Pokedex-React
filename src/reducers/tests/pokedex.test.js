import pokedexReducer from '../pokedex';

describe('Pokedex Reducer', () => {
  it('1. Checks the default state is returned', () => {
    const mockState = undefined;
    const mockAction = { type: 'any' };
    const state = pokedexReducer(mockState, mockAction);
    expect(state).toStrictEqual([]);
  });

  it(
    '2. Checks the default action for the reducer, should return given state',
    () => {
      const mockState = 'Defaulty';
      const mockAction = { type: 'any' };
      const state = pokedexReducer(mockState, mockAction);
      expect(state).toBe('Defaulty');
    },
  );

  it(
    '3. Checks the new state is returned when a valid action is provided',
    () => {
      const mockState = undefined;
      const mockAction = { type: 'ADD_POKEMON', payload: 'Defaulty' };
      const state = pokedexReducer(mockState, mockAction);
      expect(state).toStrictEqual(['Defaulty']);
    },
  );

  it(
    '4. Checks the existing pokemon is not added to the state',
    () => {
      const mockState = ['Defaulty'];
      const mockAction = { type: 'ADD_POKEMON', payload: 'Defaulty' };
      const state = pokedexReducer(mockState, mockAction);
      expect(state).toStrictEqual(['Defaulty']);
    },
  );
});
