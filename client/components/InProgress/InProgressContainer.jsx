import React, {useState, useEffect} from "react";
import '../../styles/taskcontainer.scss';
import Task from "../Task";

const InProgressContainer = () =>{
    const [inProgress, setInProgress] = useState([]);
    const inProgressTasks = [];
  
    useEffect(() => {
      // Fetch data when the component mounts
      getInProgress();
    }, []);
  
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
          for (let i = 0; i < data.length; i++){
            if (data[i].status === 'in progress'){
                inProgressTasks.push(<Task name={data[i].description} priority={data[i].priority} notes={data[i].notes} status={data[i].status}/>);
            }
          }
          setInProgress(inProgressTasks);
        });
    };
  
    return (
      <>
        <div className="task-container">
          {inProgress}
        </div>
      </>
    );
  
}

export default InProgressContainer;