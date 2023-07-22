import React from 'react';
import './TaskCard.css';

const TaskCard = (props) => {
  return (
    <div className='task-card-container'>
      <label className='task-label' htmlFor={`task-${props.id}`}>
        <input
          id={`task-${props.id}`}
          className='task-checkbox'
          type='radio'
          name='tasks'
        />
        {props.name}
      </label>
      <div className='line'></div>
      <button className='remove-button'>Remove from My List</button>
    </div>
  );
};

export default TaskCard;