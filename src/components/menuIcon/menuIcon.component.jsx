import './menuIcon.styles.css';

import { useContext } from 'react';

import { menuContext } from '../../context/menu.context';
function MenuIcon() {
  const { isActive, setIsActive } = useContext(menuContext);

  const handleClick = () => setIsActive(!isActive);
  return (
    <div
      onClick={handleClick}
      className={`menu-icon ${isActive ? 'is-active' : ''}`}
    >
      <div className='menu-icon__wrapper'>
        <span className='menu-icon__line'></span>
        <span className='menu-icon__line'></span>
        <span className='menu-icon__line'></span>
      </div>
    </div>
  );
}

export default MenuIcon;
