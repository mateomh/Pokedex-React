import { connect } from 'react-redux';
import PokeFilterStyles from '../components/styles/pokefilter.module.css';
import FilterItem from './filteritem';

const PokeFilter = () => {
  let allTypes = ['normal', 'poison', 'psychic', 'grass', 'ground'];
  allTypes = allTypes.concat(['ice', 'fire', 'rock', 'dragon', 'water', 'bug']);
  allTypes = allTypes.concat(['dark', 'fighting', 'ghost', 'steel', 'flying', 'electric', 'fairy']);
  return (
    <div className={PokeFilterStyles.Bar}>
      <h2 className={PokeFilterStyles.Title}>Filter By Type</h2>
      {allTypes.map(type => (
        <FilterItem key={type} type={type} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  filter: state.filter,
});

export default connect(mapStateToProps)(PokeFilter);
