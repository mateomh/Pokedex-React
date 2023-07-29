import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from '../actions/actions';
import TypeBadge from '../components/typebadge';
import FilterItemStyles from '../components/styles/filteritem.module.css';

const FilterItem = props => {
  const { type, filter } = props;

  const filterClick = event => {
    const { target: clickedFilter } = event;

    if (clickedFilter.id === filter) {
      props.updateFilter('All');
    } else {
      props.updateFilter(clickedFilter.id);
    }
  };

  let itemClass = `${FilterItemStyles.Item}`;

  if (type === filter) {
    itemClass = itemClass.concat(` ${FilterItemStyles.Selected}`);
  }

  return (
    <div className={itemClass} onClick={filterClick} role="button" id={type}>
      <TypeBadge type={type} />
    </div>
  );
};

FilterItem.propTypes = {
  type: PropTypes.string.isRequired,
  updateFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapDisptachToProps = dispatch => ({
  updateFilter: filter => dispatch(Actions.changeFilter(filter)),
});

const mapStateToProps = state => ({
  filter: state.filter,
});

export default connect(mapStateToProps, mapDisptachToProps)(FilterItem);
