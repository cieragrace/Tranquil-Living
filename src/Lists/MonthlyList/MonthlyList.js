import TaskCard from '../../TaskCard/TaskCard';
import './MonthlyList.css';

const MonthlyList = ({monthlyTasks}) => {

  const monthlyChores = monthlyTasks.map(task => {
    return(
      <TaskCard 
        id={task.id}
        name={task.name}
        key={task.key}/>
    ) 
  })

  return (
    <div className='monthly-list-container'>
      <div className='monthly-image'></div>
      <div className='monthly-header'>
        <h2 className='monthly-title'>My monthly Tasks</h2>
        <h3 className='monthly-date'>Today's Date</h3>
      </div>
      <div className='task-container'>{monthlyChores}</div>
    </div>
  );
}

export default MonthlyList;