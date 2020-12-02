/* eslint-disable react/forbid-foreign-prop-types */
import { render, screen } from '@testing-library/react';
import PropTypes from 'prop-types';
import TypeBadge from '../typebadge';

describe('TypeBadge Component', () => {
  it(
    '1. Renders correctly with the provided name in uppercase',
    () => {
      render(<TypeBadge type="Angry" />);
      const badge = screen.getByText('ANGRY');
      expect(badge).toBeDefined();
    },
  );

  it(
    '2. Checks the types for the props',
    () => {
      expect(TypeBadge.propTypes.type).toBe(PropTypes.string.isRequired);
    },
  );
});
