import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/root';
import PokeInfo from '../pokeinfo';

describe('PokeDex Component', () => {
  beforeEach(() => {
    const mockState = {
      filter: 'All',
      pokemons: [],
      page: 50,
      currentPokemon: {
        name: 'Defaulty',
        imagesm: '',
        types: ['1', '2'],
        id: 5000,
      },
    };

    const mockStore = createStore(rootReducer, mockState);
    render(
      <Provider store={mockStore}>
        <PokeInfo />
      </Provider>,
    );
  });

  it(
    '1. Renders correctly',
    () => {
      const PokeName = screen.getByText('Defaulty');
      expect(PokeName).toBeDefined();
    },
  );
});
