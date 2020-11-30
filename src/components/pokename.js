import PropTypes from 'prop-types';
import PokeDexItemStyles from './styles/pokedexitem.module.css';

const PokeName = props => {
  const {
    image,
    number,
    name,
  } = props;

  return (
    <>
      {image && <img className={PokeDexItemStyles.Image} src={image} alt="pokemon" />}
      <p className={PokeDexItemStyles.Number}>
        N°&nbsp;&nbsp;
        {number}
      </p>
      <p className={PokeDexItemStyles.Name}>{name}</p>
    </>
  );
};

PokeName.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default PokeName;
