/* eslint-disable react/forbid-foreign-prop-types */
import { render, screen } from '@testing-library/react';
import PropTypes from 'prop-types';
import PokeDexItem from '../pokedexitem';

describe('PokeLogo Component', () => {
  it(
    '1. Renders correctly with the provided name',
    () => {
      render(<PokeDexItem
        name="Defaulty"
        number={50}
        image=""
        clickFcn={() => {}}
      />);
      const logo = screen.getByText('Defaulty');
      expect(logo).toBeDefined();
    },
  );

  it(
    '2. Checks the types for the props',
    () => {
      expect(PokeDexItem.propTypes.clickFcn).toBe(PropTypes.func.isRequired);
      expect(PokeDexItem.propTypes.number).toBe(PropTypes.number.isRequired);
      expect(PokeDexItem.propTypes.name).toBe(PropTypes.string.isRequired);
      expect(PokeDexItem.propTypes.image).toBe(PropTypes.string);
    },
  );
});
