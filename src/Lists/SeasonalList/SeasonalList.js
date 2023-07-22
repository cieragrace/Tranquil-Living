import TaskCard from '../../TaskCard/TaskCard';
import './SeasonalList.css';

const SeasonalList = ({seasonalTasks}) => {

  const seasonalChores = seasonalTasks.map(task => {
    return(
      <TaskCard 
        id={task.id}
        name={task.name}
        key={task.key}/>
    ) 
  })

  return (
    <div className='seasonal-list-container'>
      <div className='seasonal-image'></div>
      <div className='seasonal-header'>
        <h2 className='seasonal-title'>My seasonal Tasks</h2>
        <h3 className='seasonal-date'>Today's Date</h3>
      </div>
      <div className='task-container'>{seasonalChores}</div>
    </div>
  );
}

export default SeasonalList;