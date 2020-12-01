import * as ApiComms from '../apicomms';

describe('Api communications module', () => {
  it(
    '1. Checks the get pokemons method',
    async () => {
      const data = await ApiComms.getPokemons(1, 3);
      expect(data).toBeInstanceOf(Object);
    },
  );

  it(
    '2. Checks the get one pokemon info method',
    async () => {
      const data = await ApiComms.getOnePokemonInfo('bulbasaur');
      expect(data.name).toBe('bulbasaur');
    },
  );
});
