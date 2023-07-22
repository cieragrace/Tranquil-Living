import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import CleaningList from '../CleaningList/CleaningList';
import { useState, useEffect } from 'react';
import getAPIData from '../apiCalls';
import DailyList from '../Lists/DailyList/DailyList';
import WeeklyList from '../Lists/WeeklyList/WeeklyList';
import MonthlyList from '../Lists/MonthlyList/MonthlyList';
import SeasonalList from '../Lists/SeasonalList/SeasonalList';
import AnnualList from '../Lists/AnnualList/AnnualList';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

const App = () => {
const [cleaningLists, setCleaningLists] = useState([])
const [incompletedTasks, setIncompleteTasks] = useState([])
const [completedTasks, setCompletedTasks] = useState([])

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
      <Switch>
        <Route
          exact path='/'
          render={() => (
            <>
              <Header />,
              <Home />,
              <CleaningList />
              </>
          )}
        />
        <Route
          exact path='/daily-tasks'
          render={() => (
            <DailyList />
          )}
        />
        <Route
          exact path='/weekly-tasks'
          render={() => (
            <WeeklyList />
          )}
        />
        <Route
        exact path='/monthly-tasks'
        render={() => (
            <MonthlyList />
          )}
        />
        <Route
          exact path='/seasonal-tasks'
          render={() => (
            <SeasonalList />
          )}
        />
        <Route
          exact path='/annual-tasks'
          render={() => (
            <AnnualList />
          )}
        />
        </Switch>
    </div>
  )
}

export default App