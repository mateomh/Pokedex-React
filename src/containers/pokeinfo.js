/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/forbid-prop-types */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PokeInfoStyles from './styles/pokeinfo.module.css';
import TypeBadge from '../components/typebadge';
import PokeName from '../components/pokename';

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

  const backClick = () => {
    props.history.push('/');
  };

  return (
    <div className={PokeInfoStyles.Card}>
      <div className={PokeInfoStyles.Back} onClick={backClick}>&lt; Back</div>
      <div className={PokeInfoStyles.Name}>
        <PokeName image={imagesm} name={name} number={id} />
      </div>
      <img className={PokeInfoStyles.Image} src={imagelg} alt="pokemon big" />
      <p className={`${PokeInfoStyles.Info} ${PokeInfoStyles.Title}`}>Type</p>
      <div className={`${PokeInfoStyles.Info} ${PokeInfoStyles.Data}`}>
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
  history: PropTypes.any,
};

PokeInfo.defaultProps = {
  history: undefined,
};

const mapStateToProps = state => ({
  pokemon: state.currentPokemon,
  page: state.page,
});

export default connect(mapStateToProps)(PokeInfo);
