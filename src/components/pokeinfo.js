/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokeInfoStyles from './styles/pokeinfo.module.css';
import TypeBadge from './typebadge';
import PokeName from './pokename';

const PokeInfo = props => {
  const { pokemon } = props;
  const {
    id,
    name,
    imagesm,
    imagelg,
    types,
    weight,
    height,
  } = pokemon;

  return (
    <div className={PokeInfoStyles.Card}>
      {/* <p className={PokeInfoStyles.Name}>{name}</p> */}
      <a href="/" className={PokeInfoStyles.Back}> &lt; Back </a>
      <div className={PokeInfoStyles.Name}>
        <PokeName image={imagesm} name={name} number={id} />
      </div>
      <img className={PokeInfoStyles.Image} src={imagelg} alt="pokemon big" />
      <p className={`${PokeInfoStyles.Info} ${PokeInfoStyles.Title}`}>Type</p>
      <div className={`${PokeInfoStyles.Info} ${PokeInfoStyles.Data}`}>
        {/* <TypeBadge type={type1} />
        {type2 && <TypeBadge type={type2} />} */}
        {types.map(type => (
          <TypeBadge key={type} type={type} />
        ))}
      </div>
      <p className={`${PokeInfoStyles.Info} ${PokeInfoStyles.Title}`}>Height (m)</p>
      <p className={`${PokeInfoStyles.Info} ${PokeInfoStyles.Data}`}>{(height * 0.1).toFixed(2)}</p>
      <p className={`${PokeInfoStyles.Info} ${PokeInfoStyles.Title}`}>Weight (Kg)</p>
      <p className={`${PokeInfoStyles.Info} ${PokeInfoStyles.Data}`}>{(weight * 0.1).toFixed(2)}</p>
    </div>
  );
};

PokeInfo.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  pokemon: state.currentPokemon,
  page: state.page,
});

export default connect(mapStateToProps)(PokeInfo);
