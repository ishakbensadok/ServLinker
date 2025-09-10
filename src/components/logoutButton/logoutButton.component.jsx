import { useContext } from 'react';
import { userContext } from '../../context/user.context';

function LogoutButton() {
  const { handleLogin } = useContext(userContext);

  const handleClick = () => handleLogin(true);
  return <button onClick={handleClick}>Logout</button>;
}

export default LogoutButton;
