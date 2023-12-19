import React from 'react';
import '../styles/task.scss';

const Task = (props) => {
  const { name, priority, notes, status } = props;

  const dragStart = e =>{
    const target = e.target;
    const task_name = target.getAttribute('class').split(' ')[2].toLowerCase();
    e.dataTransfer.setData('task-name', task_name);
    console.log('Drag Start:', task_name);
  }

  const dragOver = e =>{
    e.stopPropagation();
  }


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
    <div className={`task ${getStatus()} ${name.toLowerCase().split(' ').join('-')}`} draggable onDragStart={dragStart} onDragOver={dragOver}>
      <p>{name}</p>
      <p
        className={
          priority === 1
            ? 'not-important'
            : priority === 2
            ? 'important'
            : 'urgent'
        }
      >
        {priority=== 1 ? 'not important' : priority===2 ? 'important' : 'urgent'}
      </p>
      <details>
        {notes}
        <summary>More info</summary>
      </details>
    </div>
  );
};

export default Task;
