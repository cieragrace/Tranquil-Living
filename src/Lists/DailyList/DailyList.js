import TaskCard from '../../TaskCard/TaskCard';
import './DailyList.css';

const DailyList = ({dailyTasks}) => {

  const dailyChores = dailyTasks.map(task => {
    return(
      <TaskCard 
        id={task.id}
        name={task.name}
        key={task.key}/>
    ) 
  })

  return (
    <div className='daily-list-container'>
      <div className='daily-header'>
        <h2 className='daily-title'>My Daily Tasks</h2>
        <h3 className='daily-date'>Today's Date</h3>
      </div>
      <div className='task-container'>{dailyChores}</div>
    </div>
  );
}

export default DailyList;