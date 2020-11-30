import Logo from '../assets/images/logo1.png';
import PokeLogoStyles from './styles/pokelogo.module.css';

const PokeLogo = () => (
  <>
    <img className={PokeLogoStyles.Logo} src={Logo} alt="pokedex_logo" />
  </>
);

export default PokeLogo;
