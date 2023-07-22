import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import CleaningList from '../CleaningList/CleaningList';
import { useState, useEffect } from 'react';
import getAPIData from '../apiCalls';

const App = () => {
const [cleaningLists, setCleaningLists] = useState([])

useEffect(() => {
  const getCleaningLists = () => {
    getAPIData()
    .then((data) => setCleaningLists(data.tasks))
    .catch((error) => console.log("error"))
  }
  getCleaningLists()
}, []) 

  return(
    <div className='app-container'>
      <Header />
      <Home />
      <CleaningList />
    </div>
  )
}

export default App