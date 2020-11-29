/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import PokeInfoStyles from './styles/pokeinfo.module.css';
import TypeBadge from './typebadge';
import PokeDexItem from './pokedexitem';

const PokeInfo = props => {
  const {
    name,
    image,
    type1,
    type2,
    height,
    weight,
  } = props;

  return (
    <div className={PokeInfoStyles.Card}>
      {/* <p className={PokeInfoStyles.Name}>{name}</p> */}
      <div className={PokeInfoStyles.Name}>
        <PokeDexItem image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" name={name} number={1} />
      </div>
      <img className={PokeInfoStyles.Image} src={image} alt="pokemon big" />
      <p className={`${PokeInfoStyles.Info} ${PokeInfoStyles.Title}`}>Type</p>
      <div className={`${PokeInfoStyles.Info} ${PokeInfoStyles.Data}`}>
        <TypeBadge type={type1} />
        {type2 && <TypeBadge type={type2} />}
      </div>
      <p className={`${PokeInfoStyles.Info} ${PokeInfoStyles.Title}`}>Height (m)</p>
      <p className={`${PokeInfoStyles.Info} ${PokeInfoStyles.Data}`}>{height * 0.1}</p>
      <p className={`${PokeInfoStyles.Info} ${PokeInfoStyles.Title}`}>Weight (Kg)</p>
      <p className={`${PokeInfoStyles.Info} ${PokeInfoStyles.Data}`}>{weight * 0.1}</p>
    </div>
  );
};

PokeInfo.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type1: PropTypes.string.isRequired,
  type2: PropTypes.string,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
};

PokeInfo.defaultProps = {
  type2: undefined,
};

export default PokeInfo;
