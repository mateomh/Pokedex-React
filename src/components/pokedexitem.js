import PropTypes from 'prop-types';
import PokeName from './pokename';
import PokeDexItemStyles from './styles/pokedexitem.module.css';

const PokeDexItem = props => {
  const {
    image,
    number,
    name,
    clickFcn,
  } = props;

  return (
    <div className={PokeDexItemStyles.Item} id={number} onClick={() => clickFcn(name)}>
      <PokeName image={image} name={name} number={number} />
    </div>
  );
};

PokeDexItem.propTypes = {
  image: PropTypes.string,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  clickFcn: PropTypes.func.isRequired,
};

PokeDexItem.defaultProps = {
  image: undefined,
};

export default PokeDexItem;
