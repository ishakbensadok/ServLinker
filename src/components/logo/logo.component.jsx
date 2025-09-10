import { Link } from 'react-router-dom';
import LogoSvg from '/src/assets/FullLogo.svg';
import './logo.styles.css';

function Logo() {
  return (
    <Link className='Logo' to='/'>
      <img src={LogoSvg} alt='Logo' className='logo-svg' />
    </Link>
  );
}

export default Logo;
