import React, { useState, useEffect } from 'react';
import '../../styles/taskcontainer.scss';
import Task from '../Task';

const CompletedContainer = () => {
  const [completed, setCompleted] = useState([]);
  const completedTasks = [];

  useEffect(() => {
    // Fetch data when the component mounts
    getCompleted();
  }, []);

  const drop = (e) => {
    e.preventDefault();
    console.log('DROP', e.target);

    console.log(e.target);
    const task_name = e.dataTransfer.getData('task-name');

    console.log(`task status in drop:${task_name}`);

    const task = document.querySelector(`.${task_name}`);

    console.log('Task:', task);
    

    e.target.appendChild(task);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const getCompleted = (e) => {
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
          if (data[i].status === 'completed') {
            completedTasks.push(
              <Task
                name={data[i].description}
                priority={data[i].priority}
                notes={data[i].notes}
                status={data[i].status}
              />
            );
          }
        }
        setCompleted(completedTasks);
      });
  };

  return (
    <>
      <div className="task-container" onDrop={drop} onDragOver={dragOver}>
        {completed}
      </div>
    </>
  );
};

export default CompletedContainer;
