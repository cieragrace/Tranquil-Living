import './Header.css';
import Nav from '../App/Nav/Nav';

const Header = () => {
  return (
    <div className='header-container'>
      <h1 className='app-name'>Tranquil Living</h1>
      <Nav />
    </div>
  );
};

export default Header;