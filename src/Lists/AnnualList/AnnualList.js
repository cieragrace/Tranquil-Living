import TaskCard from '../../TaskCard/TaskCard';
import './AnnualList.css';

const AnnualList = ({annualTasks}) => {

  const annualChores = annualTasks.map(task => {
    return(
      <TaskCard 
        id={task.id}
        name={task.name}
        key={task.key}/>
    ) 
  })

  return (
    <div className='annual-list-container'>
      <div className='annual-image'></div>
      <div className='annual-header'>
        <h2 className='annual-title'>My annual Tasks</h2>
        <h3 className='annual-date'>Today's Date</h3>
      </div>
      <div className='task-container'>{annualChores}</div>
    </div>
  );
}

export default AnnualList;