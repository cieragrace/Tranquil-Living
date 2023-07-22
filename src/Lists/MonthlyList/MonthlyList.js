import React, { useState } from 'react';
import TaskCard from '../../TaskCard/TaskCard';
import './MonthlyList.css';

const MonthlyList = ({ monthlyTasks }) => {
  const [completedMonthly, setCompletedMonthly] = useState([]);

  const handleTaskCompletion = (taskId) => {
    const completedTask = monthlyTasks.find((task) => task.id === taskId);

    if (completedTask) {
      const updatedMonthlyTasks = monthlyTasks.filter((task) => task.id !== taskId);
      setCompletedMonthly((prevCompleted) => [...prevCompleted, completedTask]);
    }
  };

  const activeMonthlyTasks = monthlyTasks.filter((task) => !completedMonthly.includes(task));

  const monthlyChores = activeMonthlyTasks.map((task) => {
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
    <div className='monthly-list-container'>
      <div className='monthly-image'></div>
      <div className='monthly-header'>
        <h2 className='monthly-title'>My Monthly Tasks</h2>
        <h3 className='monthly-date'>Today's Date</h3>
      </div>
      <div className='task-container'>{monthlyChores}</div>
    </div>
  );
};

export default MonthlyList;