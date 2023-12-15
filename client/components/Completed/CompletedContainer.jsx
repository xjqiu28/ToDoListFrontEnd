import React, {useState, useEffect} from "react";
import '../../styles/taskcontainer.scss';
import Task from "../Task";


const CompletedContainer = () =>{
    const [completed, setCompleted] = useState([]);
    const completedTasks = [];
  
    useEffect(() => {
      // Fetch data when the component mounts
      getCompleted();
    }, []);
  
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
          for (let i = 0; i < data.length; i++){
            if (data[i].status === 'completed'){
                completedTasks.push(<Task name={data[i].description} priority={data[i].priority} notes={data[i].notes} status={data[i].status}/>);
            }
          }
          setCompleted(completedTasks);
        });
    };
  
    return (
      <>
        <div className="task-container">
          {completed}
        </div>
      </>
    );
  
}

export default CompletedContainer;