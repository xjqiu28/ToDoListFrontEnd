import React, { useState, useEffect } from 'react';
import '../../styles/taskcontainer.scss';
import Task from '../Task';
const PendingContainer = () => {
  const [pending, setPending] = useState([]);
  const pendingTasks = [];

  useEffect(() => {
    // Fetch data when the component mounts
    getPending();
  }, []);
  
  const drop = e => {
    e.preventDefault();
    console.log(e.target);
    const task_name = e.dataTransfer.getData('task-name');

    console.log(`task status in drop:${task_name}`);

    const task = document.querySelector(`.${task_name}`);

    console.log('Task:', task);
    

    e.target.appendChild(task);

  }

  const dragOver = e =>{
    e.preventDefault();
  }


  const getPending = (e) => {
    fetch('http://localhost:3000/task', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].status === 'pending') {
            pendingTasks.push(
              <Task
                name={data[i].description}
                priority={data[i].priority}
                notes={data[i].notes}
                status={data[i].status}
              />
            );
          }
        }
        setPending(pendingTasks);
      });
  };

  return (
    <>
      <div className="task-container" onDrop={drop} onDragOver={dragOver}>{pending}</div>
    </>
  );
};

export default PendingContainer;
