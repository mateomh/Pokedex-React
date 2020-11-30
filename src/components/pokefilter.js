import TypeBadge from './typebadge';
import PokeFilterStyles from './styles/pokefilter.module.css';
import Logo from '../assets/images/logo1.png';

const PokeFilter = () => {
  let allTypes = ['normal', 'poison', 'psychic', 'grass', 'ground'];
  allTypes = allTypes.concat(['ice', 'fire', 'rock', 'dragon', 'water', 'bug']);
  allTypes = allTypes.concat(['dark', 'fighting', 'ghost', 'steel', 'flying', 'electric', 'fairy']);
  console.log(allTypes);

  return (
    <div className={PokeFilterStyles.Bar}>
      <img src={Logo} alt="pokedex_logo" />
      <h2 className={PokeFilterStyles.Title}>Filter By Type</h2>
      {allTypes.map(type => (
        <TypeBadge key={type} type={type} />
      ))}
    </div>
  );
};

export default PokeFilter;
