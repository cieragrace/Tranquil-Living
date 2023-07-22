import React, { useState } from 'react';
import TaskCard from '../../TaskCard/TaskCard';
import './DailyList.css';

const DailyList = ({ dailyTasks }) => {
  const [completedDaily, setCompletedDaily] = useState([]);

  const handleTaskCompletion = (taskId) => {
    const completedTask = dailyTasks.find((task) => task.id === taskId);

    if (completedTask) {
      const updatedDailyTasks = dailyTasks.filter((task) => task.id !== taskId);
      setCompletedDaily((prevCompleted) => [...prevCompleted, completedTask]);
    }
  };

  const activeDailyTasks = dailyTasks.filter((task) => !completedDaily.includes(task));

  const dailyChores = activeDailyTasks.map((task) => {
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
    <div className='daily-list-container'>
      <div className='daily-image'></div>
      <div className='daily-header'>
        <h2 className='daily-title'>My Daily Tasks</h2>
        <h3 className='daily-date'>Today's Date</h3>
      </div>
      <div className='task-container'>{dailyChores}</div>
    </div>
  );
};

export default DailyList;


