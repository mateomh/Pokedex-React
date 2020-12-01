/* eslint-disable react/forbid-foreign-prop-types */
import { render, screen } from '@testing-library/react';
import PropTypes from 'prop-types';
import PokeName from '../pokename';

describe('PokeName Component', () => {
  it(
    '1. Renders correctly with the provided name',
    () => {
      render(<PokeName
        name="Defaulty"
        number={50}
        image=""
      />);
      const logo = screen.getByText('Defaulty');
      expect(logo).toBeDefined();
    },
  );

  it(
    '2. Checks the types for the props',
    () => {
      expect(PokeName.propTypes.number).toBe(PropTypes.number.isRequired);
      expect(PokeName.propTypes.name).toBe(PropTypes.string.isRequired);
      expect(PokeName.propTypes.image).toBe(PropTypes.string.isRequired);
    },
  );
});
