import React, { useState, useEffect } from 'react';
import Completed from './Completed/Completed';
import InProgress from './InProgress/InProgress';
import Pending from './Pending/Pending';
import '../styles/app.scss';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Simulate a delay (e.g., fetching data from an API)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setLoading(false); // Set loading to false after the delay
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className='loader-container'>
          <div className="loader"></div>
        </div>
      ) : (
        <div className="main">
          <div className="app">
            <Pending />
            <InProgress />
            <Completed />
          </div>
          <button className="add-task">ADD TASK</button>
        </div>
      )}
    </>
  );
};

export default App;
