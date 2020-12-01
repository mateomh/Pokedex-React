/* eslint-disable react/forbid-foreign-prop-types */
import { render, screen } from '@testing-library/react';
import PropTypes from 'prop-types';
import PokeDexItem from '../pokedexitem';

describe('PokeDexItem Component', () => {
  it(
    '1. Renders correctly with the provided name',
    () => {
      render(<PokeDexItem
        name="Defaulty"
        number={50}
        image=""
        clickFcn={() => {}}
      />);
      const item = screen.getByText('Defaulty');
      expect(item).toBeDefined();
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

  it(
    '3. Checks the callback function is called when clicked',
    () => {
      const mockCallback = jest.fn();
      render(<PokeDexItem
        name="Defaulty"
        number={50}
        image=""
        clickFcn={mockCallback}
      />);
      const item = screen.getByText('Defaulty');
      expect(item).toBeDefined();
      item.click();
      expect(mockCallback).toHaveBeenCalled();
    },
  );
});
