import pokemonReducer from '../pokemon';

describe('Pokemon Reducer', () => {
  it('1. Checks the default state is returned', () => {
    const mockState = undefined;
    const mockAction = { type: 'any' };
    const state = pokemonReducer(mockState, mockAction);
    expect(state).toStrictEqual({});
  });

  it(
    '2. Checks the default action for the reducer, should return given state',
    () => {
      const mockState = 'Defaulty';
      const mockAction = { type: 'any' };
      const state = pokemonReducer(mockState, mockAction);
      expect(state).toBe('Defaulty');
    },
  );

  it(
    '3. Checks the new state is returned when a valid action is provided',
    () => {
      const mockState = undefined;
      const mockAction = { type: 'CHANGE_POKEMON', payload: 'Defaulty' };
      const state = pokemonReducer(mockState, mockAction);
      expect(state).toBe('Defaulty');
    },
  );
});
