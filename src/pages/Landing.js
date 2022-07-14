import { Link } from 'react-router-dom';
import main from '../assets/images/undraw_save_to_bookmarks_re_8ajf.svg';
import { Logo } from '../components';

export const Landing = () => {
  return (
    <main>
      <nav>
        <Logo />
      </nav>
      <div className='wrapper'>
        <div className='info'>
          <h2>
            Mega <span>Blog</span>
          </h2>
          <p>
            Create, add and change of the best times you've gained. Share now
            with Mega Blog. Stay in touch with the people all over the world
          </p>
          <Link to='/register'>
            <button>Login/Register</button>
          </Link>
        </div>
        <div>
          <img src={main} alt='add your blog' />
        </div>
      </div>
    </main>
  );
};
