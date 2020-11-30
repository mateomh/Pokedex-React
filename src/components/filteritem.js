/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import TypeBadge from './typebadge';
import FilterItemStyles from './styles/filteritem.module.css';

const FilterItem = props => {
  const { type } = props;

  const filterClick = event => {
    const { target: filter } = event;
    console.log(filter.id);
    filter.classList.toggle(FilterItemStyles.Selected);
  };

  return (
    <div className={FilterItemStyles.Item} onClick={filterClick} role="button" id={type}>
      <TypeBadge type={type} />
    </div>
  );
};

FilterItem.propTypes = {
  type: PropTypes.string.isRequired,
};

export default FilterItem;
