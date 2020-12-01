import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PokeFilter from '../pokefilter';
import rootReducer from '../../reducers/root';

describe('PokeFilter Component', () => {
  beforeEach(() => {
    const mockState = {
      filter: 'My Filter',
      pokemons: ['My Pokemons'],
      page: 50,
      currentPokemon: 'Defaulty',
    };

    const mockStore = createStore(rootReducer, mockState);
    render(
      <Provider store={mockStore}>
        <PokeFilter store={mockStore} />
      </Provider>,
    );
  });

  it(
    '1. Renders correctly',
    () => {
      const badge = screen.getByText('Filter By Type');
      expect(badge).toBeDefined();
    },
  );
});
