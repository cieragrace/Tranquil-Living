import './Header.css';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-container'>
      <Link className='app-name' to='/'>Tranquil Living</Link>
      <Nav />
    </div>
  );
};

export default Header;