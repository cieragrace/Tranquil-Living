import TaskCard from '../../TaskCard/TaskCard';
import './WeeklyList.css';

const WeeklyList = ({weeklyTasks}) => {

  const weeklyChores = weeklyTasks.map(task => {
    return(
      <TaskCard 
        id={task.id}
        name={task.name}
        key={task.key}/>
    ) 
  })

  return (
    <div className='weekly-list-container'>
      <div className='weekly-image'></div>
      <div className='weekly-header'>
        <h2 className='weekly-title'>My weekly Tasks</h2>
        <h3 className='weekly-date'>Today's Date</h3>
      </div>
      <div className='task-container'>{weeklyChores}</div>
    </div>
  );
}

export default WeeklyList;