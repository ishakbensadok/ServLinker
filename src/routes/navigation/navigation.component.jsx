import Logo from '../../components/logo/logo.component';
import { Outlet } from 'react-router-dom';
import './navigation.styles.css';

function Navigation() {
  return (
    <>
      <nav className='nav'>
        <Logo />
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
