// import TaskCard from '../../TaskCard/TaskCard';
// import './AnnualList.css';

// const AnnualList = ({annualTasks}) => {

//   const annualChores = annualTasks.map(task => {
//     return(
//       <TaskCard 
//         id={task.id}
//         name={task.name}
//         key={task.key}/>
//     ) 
//   })

//   return (
//     <div className='annual-list-container'>
//       <div className='annual-image'></div>
//       <div className='annual-header'>
//         <h2 className='annual-title'>My annual Tasks</h2>
//         <h3 className='annual-date'>Today's Date</h3>
//       </div>
//       <div className='task-container'>{annualChores}</div>
//     </div>
//   );
// }

// export default AnnualList;

import React, { useState } from 'react';
import TaskCard from '../../TaskCard/TaskCard';
import './AnnualList.css';

const AnnualList = ({ annualTasks }) => {
  const [completedAnnual, setCompletedAnnual] = useState([]);

  const handleTaskCompletion = (taskId) => {
    const completedTask = annualTasks.find((task) => task.id === taskId);

    if (completedTask) {
      const updatedAnnualTasks = annualTasks.filter((task) => task.id !== taskId);
      setCompletedAnnual((prevCompleted) => [...prevCompleted, completedTask]);
    }
  };

  const activeAnnualTasks = annualTasks.filter((task) => !completedAnnual.includes(task));

  const annualChores = activeAnnualTasks.map((task) => {
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
    <div className='annual-list-container'>
      <div className='annual-image'></div>
      <div className='annual-header'>
        <h2 className='annual-title'>My Annual Tasks</h2>
        <h3 className='annual-date'>Today's Date</h3>
      </div>
      <div className='task-container'>{annualChores}</div>
    </div>
  );
};

export default AnnualList;