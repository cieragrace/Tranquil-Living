import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import CleaningList from '../CleaningList/CleaningList';

const App = () => {
  return(
    <div className='app-container'>
      <Header />
      <Home />
      <CleaningList />
    </div>
  )
}

export default App