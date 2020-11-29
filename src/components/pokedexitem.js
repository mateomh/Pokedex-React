/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-tag-spacing */
import PropTypes from 'prop-types';
import PokeDexItemStyles from './styles/pokedexitem.module.css';

const PokeDexItem = props => {
  const {
    image,
    number,
    name,
    clickFcn,
  } = props;

  return (
    <div className={PokeDexItemStyles.Item} id={number} onClick={() => clickFcn(name)} >
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
  clickFcn: PropTypes.func.isRequired,
};

PokeDexItem.defaultProps = {
  image: undefined,
};

export default PokeDexItem;
