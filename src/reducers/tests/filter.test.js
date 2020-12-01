import filterReducer from '../filter';

describe('Filter Reducer', () => {
  it('1. Checks the default state is returned', () => {
    const mockState = undefined;
    const mockAction = { type: 'any' };
    const state = filterReducer(mockState, mockAction);
    expect(state).toBe('All');
  });

  it(
    '2. Checks the default action for the reducer, should return given state',
    () => {
      const mockState = 'My Filter';
      const mockAction = { type: 'any' };
      const state = filterReducer(mockState, mockAction);
      expect(state).toBe('My Filter');
    },
  );

  it(
    '3. Checks the new state is returned when a valid action is provided',
    () => {
      const mockState = undefined;
      const mockAction = { type: 'CHANGE_FILTER', payload: 'My Filter' };
      const state = filterReducer(mockState, mockAction);
      expect(state).toBe('My Filter');
    },
  );
});
