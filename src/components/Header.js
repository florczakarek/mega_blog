import { Logo } from './Logo';

export const Header = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <Logo />
      </nav>
      <ul className='feed'>
        <li>Blogs</li>
        <li>Add Blog</li>
      </ul>
      <div className='btns'>
        <button className='login-btn'>Login</button>
        <button className='login-btn right'>Register</button>
      </div>
    </header>
  );
};
