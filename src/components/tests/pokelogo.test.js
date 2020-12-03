import { render, screen } from '@testing-library/react';
import PokeLogo from '../pokelogo';

describe('PokeLogo Component', () => {
  it(
    '1. Renders correctly',
    () => {
      render(<PokeLogo />);
      const logo = screen.getByAltText('pokedex_logo');
      expect(logo).toBeDefined();
    },
  );
});
