import * as Actions from '../actions';

describe('Redux Actions', () => {
  it(
    '1. Checks the return of the addpokemon action',
    () => {
      const action = Actions.addPokemon('Defaulty');
      expect(action.payload).toBe('Defaulty');
      expect(action.type).toBe('ADD_POKEMON');
    },
  );

  it(
    '2. Checks the return of the currentpokemon action',
    () => {
      const action = Actions.currentPokemon('Defaulty');
      expect(action.payload).toBe('Defaulty');
      expect(action.type).toBe('CHANGE_POKEMON');
    },
  );

  it(
    '3. Checks the return of the changefilter action',
    () => {
      const action = Actions.changeFilter('Defaulty');
      expect(action.payload).toBe('Defaulty');
      expect(action.type).toBe('CHANGE_FILTER');
    },
  );

  it(
    '4. Checks the return of the changepage action',
    () => {
      const action = Actions.changePage(5678940);
      expect(action.payload).toBe(5678940);
      expect(action.type).toBe('CHANGE_PAGE');
    },
  );
});
