import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import renderer from 'react-test-renderer';
import rootReducer from '../../reducers/root';
import PokeDex from '../pokedex';

describe('PokeDex Component', () => {
  beforeEach(() => {
    const pokemons = [
      {
        name: 'Defaulty',
        imagesm: '',
        types: ['1', '2'],
        id: 5000,
      },
    ];

    const mockState = {
      filter: 'All',
      pokemons,
      page: 50,
      currentPokemon: 'Defaulty',
    };

    const mockStore = createStore(rootReducer, mockState);
    render(
      <Provider store={mockStore}>
        <PokeDex />
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
