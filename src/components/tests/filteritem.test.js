/* eslint-disable react/forbid-foreign-prop-types */
import { render, screen } from '@testing-library/react';
import FilterItem from '../filteritem';
import * as Utils from './utils';

describe('TypeBadge Component', () => {
  beforeEach(() => {
    const mockState = {
      filter: 'My Filter',
      pokemons: ['My Pokemons'],
      page: 50,
      currentPokemon: 'Defaulty',
    };

    const mockStore = Utils.testStore(mockState);
    render(<FilterItem store={mockStore} type="My Filter" />);
  });

  it(
    '1. Renders correctly with the provided name in uppercase',
    () => {
      const badge = screen.getByText('MY FILTER');
      expect(badge).toBeDefined();
    },
  );

  it(
    '2. Checks the component is connected to the store',
    () => {
      const badge = screen.getByRole('button');
      expect(badge.className).toContain('Selected');
    },
  );

  it(
    '3. Checks the visual change when it is clicked',
    () => {
      const badge = screen.getByRole('button');
      badge.click();
      expect(badge.className).toBe('Item');
    },
  );
});
