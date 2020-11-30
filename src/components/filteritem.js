/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from '../actions/actions';
import TypeBadge from './typebadge';
import FilterItemStyles from './styles/filteritem.module.css';

const FilterItem = props => {
  const { type, filter } = props;

  const filterClick = event => {
    const { target: clickedFilter } = event;

    // const previousFilter = document.getElementById(props.filter);
    // if (previousFilter !== null && previousFilter !== clickedFilter) {
    //   previousFilter.classList.toggle(FilterItemStyles.Selected);
    // }

    // clickedFilter.classList.toggle(FilterItemStyles.Selected);

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
