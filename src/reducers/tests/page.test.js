import pageReducer from '../page';

describe('Page Reducer', () => {
  it('1. Checks the default state is returned', () => {
    const mockState = undefined;
    const mockAction = { type: 'any' };
    const state = pageReducer(mockState, mockAction);
    expect(state).toBe(1);
  });

  it(
    '2. Checks the default action for the reducer, should return given state',
    () => {
      const mockState = 50;
      const mockAction = { type: 'any' };
      const state = pageReducer(mockState, mockAction);
      expect(state).toBe(50);
    },
  );

  it(
    '3. Checks the new state is returned when a valid action is provided',
    () => {
      const mockState = undefined;
      const mockAction = { type: 'CHANGE_PAGE', payload: 5000 };
      const state = pageReducer(mockState, mockAction);
      expect(state).toBe(5000);
    },
  );
});
