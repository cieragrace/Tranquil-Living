import React, { useState } from 'react';
import TaskCard from '../../TaskCard/TaskCard';
import './WeeklyList.css';

const WeeklyList = ({ weeklyTasks }) => {
  const [completedWeekly, setCompletedWeekly] = useState([]);

  const handleTaskCompletion = (taskId) => {
    const completedTask = weeklyTasks.find((task) => task.id === taskId);

    if (completedTask) {
      const updatedWeeklyTasks = weeklyTasks.filter((task) => task.id !== taskId);
      setCompletedWeekly((prevCompleted) => [...prevCompleted, completedTask]);
    }
  };

  const activeWeeklyTasks = weeklyTasks.filter((task) => !completedWeekly.includes(task));

  const weeklyChores = activeWeeklyTasks.map((task) => {
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
    <div className='weekly-list-container'>
      <div className='weekly-image'></div>
      <div className='weekly-header'>
        <h2 className='weekly-title'>My Weekly Tasks</h2>
        <h3 className='weekly-date'>Today's Date</h3>
      </div>
      <div className='task-container'>{weeklyChores}</div>
    </div>
  );
};

export default WeeklyList;
