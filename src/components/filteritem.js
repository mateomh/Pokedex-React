import PropTypes from 'prop-types';
import TypeBadge from './typebadge';
import FilterItemStyles from './styles/filteritem.module.css';

const FilterItem = props => {
  const { type } = props;
  return (
    <div className={FilterItemStyles.Item}>
      <TypeBadge type={type} />
    </div>
  );
};

FilterItem.propTypes = {
  type: PropTypes.string.isRequired,
};

export default FilterItem;
