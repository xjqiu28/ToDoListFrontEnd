import React, { useState, useEffect } from 'react';
import '../../styles/taskcontainer.scss';
import Task from '../Task';

const InProgressContainer = () => {
  const [inProgress, setInProgress] = useState([]);
  const inProgressTasks = [];

  useEffect(() => {
    // Fetch data when the component mounts
    getInProgress();
  }, []);

  const drop = (e) => {
    e.preventDefault();
    const task_name = e.dataTransfer.getData('task-name');
    const task = document.querySelector(`.${task_name}`);
    task.classList.replace(task.classList[1], 'in-progress');
    e.target.appendChild(task);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const getInProgress = (e) => {
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
          if (data[i].status === 'in progress') {
            inProgressTasks.push(
              <Task
                name={data[i].description}
                priority={data[i].priority}
                notes={data[i].notes}
                status={data[i].status}
              />
            );
          }
        }
        setInProgress(inProgressTasks);
      });

    console.log(inProgress);
  };

  return (
    <>
      <div className="task-container" onDrop={drop} onDragOver={dragOver}>
        {inProgress}
      </div>
    </>
  );
};

export default InProgressContainer;
