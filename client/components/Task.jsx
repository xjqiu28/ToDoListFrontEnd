import React from 'react';
import '../styles/task.scss';

const Task = (props) => {
  const { name, priority, notes, status } = props;

  const getStatus = ()=>{
    switch (status) {
        case 'pending':
          return 'pending';
        case 'in progress':
          return 'in-progress';
        case 'completed':
          return 'completed';
        default:
          return ''; // default or fallback class
      }

  }

  return (
    <div className={`task ${getStatus()}`} draggable>
      <p>{name}</p>
      <p
        className={
          priority === 'not important'
            ? 'not-important'
            : priority === 'important'
            ? 'important'
            : 'urgent'
        }
      >
        {priority}
      </p>
      <details>
        {notes}
        <summary>More info</summary>
      </details>
    </div>
  );
};

export default Task;
