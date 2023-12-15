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
        for (let i = 0; i < data.length; i++){
          if (data[i].status === 'pending'){
            pendingTasks.push(<Task name={data[i].description} priority={data[i].priority} notes={data[i].notes} status={data[i].status}/>);
          }
        }
        setPending(pendingTasks);
      });
  };

  return (
    <>
      <div className="task-container">
        {pending}
      </div>
    </>
  );
};

export default PendingContainer;
