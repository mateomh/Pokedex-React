import PropTypes from 'prop-types';
import PokeDexItemStyles from './styles/pokedexitem.module.css';

const PokeDexItem = props => {
  const { image, number, name } = props;

  return (
    <div className={PokeDexItemStyles.Item}>
      {image && <img className={PokeDexItemStyles.Image} src={image} alt="pokemon" />}
      <p className={PokeDexItemStyles.Number}>
        N°&nbsp;&nbsp;
        {number}
      </p>
      <p className={PokeDexItemStyles.Name}>{name}</p>
    </div>
  );
};

PokeDexItem.propTypes = {
  image: PropTypes.string,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

PokeDexItem.defaultProps = {
  image: undefined,
};

export default PokeDexItem;
