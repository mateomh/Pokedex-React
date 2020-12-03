/* eslint-disable dot-notation */
import PropTypes from 'prop-types';
import BadgeStyles from './styles/typebadge.module.css';

const TypeBadge = props => {
  const { type } = props;

  return (
    <div className={`${BadgeStyles[type]} ${BadgeStyles.Badge}`}>{type.toUpperCase()}</div>
  );
};

TypeBadge.propTypes = {
  type: PropTypes.string.isRequired,
};

export default TypeBadge;
