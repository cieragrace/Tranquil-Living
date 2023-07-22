import React, { useState } from 'react';
import TaskCard from '../../TaskCard/TaskCard';
import './SeasonalList.css';

const SeasonalList = ({ seasonalTasks }) => {
  const [completedSeasonal, setCompletedSeasonal] = useState([]);

  const handleTaskCompletion = (taskId) => {
    const completedTask = seasonalTasks.find((task) => task.id === taskId);

    if (completedTask) {
      const updatedSeasonalTasks = seasonalTasks.filter((task) => task.id !== taskId);
      setCompletedSeasonal((prevCompleted) => [...prevCompleted, completedTask]);
    }
  };

  const activeSeasonalTasks = seasonalTasks.filter((task) => !completedSeasonal.includes(task));

  const seasonalChores = activeSeasonalTasks.map((task) => {
    return (
      <TaskCard
        id={task.id}
        name={task.name}
        key={task.key}
        onTaskCompletion={handleTaskCompletion}
      />
    );
  });

  return (
    <div className='seasonal-list-container'>
      <div className='seasonal-image'></div>
      <div className='seasonal-header'>
        <h2 className='seasonal-title'>My Seasonal Tasks</h2>
        <h3 className='seasonal-date'>Today's Date</h3>
      </div>
      <div className='task-container'>{seasonalChores}</div>
    </div>
  );
};

export default SeasonalList;
