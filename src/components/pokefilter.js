import TypeBadge from './typebadge';
import PokeFilterStyles from './styles/pokefilter.module.css';

const PokeFilter = () => {
  let allTypes = ['normal', 'poison', 'psychic', 'grass', 'ground'];
  allTypes = allTypes.concat(['ice', 'fire', 'rock', 'dragon', 'water', 'bug']);
  allTypes = allTypes.concat(['dark', 'fighting', 'ghost', 'steel', 'flying', 'electric', 'fairy']);

  return (
    <div className={PokeFilterStyles.Bar}>
      <h2 className={PokeFilterStyles.Title}>Filter By Type</h2>
      {allTypes.map(type => (
        <TypeBadge key={type} type={type} />
      ))}
    </div>
  );
};

export default PokeFilter;
