import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { useSelector } from 'react-redux';
export const Header = () => {
  const isLoggedIn = useSelector((state) => state.loggedIn);

  return (
    <header className='header'>
      <nav className='nav'>
        <Logo />
      </nav>
      {isLoggedIn && (
        <ul className='feed'>
          <li>
            <Link to='/blogs'>Blogs</Link>
          </li>

          <li>
            <Link to='/blogs/add'>Add Blog</Link>
          </li>
        </ul>
      )}

      <div className='btns'>
        {!isLoggedIn && (
          <>
            <Link to='/register'>
              <button className='login-btn'>Login</button>
            </Link>
            <Link to='/register'>
              <button className='login-btn right'>Register</button>
            </Link>
          </>
        )}

        {isLoggedIn && (
          <Link to='/register'>
            <button className='login-btn right'>Logout</button>
          </Link>
        )}
      </div>
    </header>
  );
};
