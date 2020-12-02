import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import renderer from 'react-test-renderer';
import rootReducer from '../../reducers/root';
import PokeInfo from '../pokeinfo';

describe('PokeInfo Component', () => {
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

  it(
    '1. Renders correctly',
    () => {
      render(
        <Provider store={mockStore}>
          <PokeInfo />
        </Provider>,
      );
      const PokeName = screen.getByText('Defaulty');
      expect(PokeName).toBeDefined();
    },
  );

  it(
    '2. Checks it renders correctly against a snapshot',
    () => {
      const tree = renderer
        .create(
          <Provider store={mockStore}>
            <PokeInfo />
          </Provider>,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    },
  );
});
