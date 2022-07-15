import { Link } from 'react-router-dom';
import logo from '../assets/images/apple-touch-icon.png';

export const Logo = () => {
  return (
    <Link to='/landing'>
      <img src={logo} className='logo' alt='logo' />
    </Link>
  );
};
