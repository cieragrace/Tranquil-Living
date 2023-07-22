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
  const [cleaningLists, setCleaningLists] = useState([]);
  const [dailyTasks, setDailyTasks] = useState([]);
  const [weeklyTasks, setWeeklyTasks] = useState([]);
  const [monthlyTasks, setMonthlyTasks] = useState([]);
  const [seasonalTasks, setSeasonalTasks] = useState([]);
  const [annualTasks, setAnnualTasks] = useState([]);

  useEffect(() => {
    const getCleaningLists = () => {
      getAPIData()
        .then((data) => {
          setCleaningLists(data.tasks);
          separateTasksByCategory(data.tasks);
        })
        .catch((error) => console.log("error"));
    };
    getCleaningLists();
  }, []);

  const separateTasksByCategory = (tasks) => {
    const daily = [];
    const weekly = [];
    const monthly = [];
    const seasonal = [];
    const annual = [];

    tasks.forEach((category) => {
      if (category.daily) daily.push(...category.daily);
      if (category.weekly) weekly.push(...category.weekly);
      if (category.monthly) monthly.push(...category.monthly);
      if (category.seasonal) seasonal.push(...category.seasonal);
      if (category.annual) annual.push(...category.annual);
    });

    setDailyTasks(daily);
    setWeeklyTasks(weekly);
    setMonthlyTasks(monthly);
    setSeasonalTasks(seasonal);
    setAnnualTasks(annual);
  };

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
            <>
              <Header />
              <DailyList 
                dailyTasks={dailyTasks}   />
            </>
          )}
        />
        <Route
          exact path='/weekly-tasks'
          render={() => (
            <>
              <Header />
              <WeeklyList 
                weeklyTasks={weeklyTasks}/>
            </>
          )}
        />
        <Route
        exact path='/monthly-tasks'
        render={() => (
          <>
            <Header />
            <MonthlyList monthlyTasks={monthlyTasks}/>
          </>
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