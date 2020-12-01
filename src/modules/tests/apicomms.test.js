import * as ApiComms from '../apicomms';

describe('Api communications module', () => {
  it(
    '1. Checks the get pokemons method',
    () => {
      const data = ApiComms.getPokemons(1, 3);
      expect(data).toBeInstanceOf(Promise);
    },
  );

  it(
    '2. Checks the get one pokemon info method',
    () => {
      const data = ApiComms.getOnePokemonInfo('bulbasaur');
      expect(data).toBeInstanceOf(Promise);
    },
  );
});
