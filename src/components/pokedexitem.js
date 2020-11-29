import PropTypes from 'prop-types';
import PokeDexItemStyles from './styles/pokedexitem.module.css';

const PokeDexItem = props => {
  const { image, number, name } = props;

  return (
    <div className={PokeDexItemStyles.Item}>
      <img className={PokeDexItemStyles.Image} src={image} alt="pokemon" />
      <p className={PokeDexItemStyles.Number}>
        N°&nbsp;&nbsp;
        {number}
      </p>
      <p className={PokeDexItemStyles.Name}>{name}</p>
    </div>
  );
};

PokeDexItem.propTypes = {
  image: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default PokeDexItem;
