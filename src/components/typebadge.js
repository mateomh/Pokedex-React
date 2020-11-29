/* eslint-disable dot-notation */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
// import './styles/typebadge.css';
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
