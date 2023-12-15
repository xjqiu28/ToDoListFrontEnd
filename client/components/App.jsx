import React from 'react';
import Completed from './Completed/Completed';
import InProgress from './InProgress/InProgress';
import Pending from './Pending/Pending';
import '../styles/app.scss';

const App = () => {
  return (
    <>
      <div className='main'>
        <div className="app">
          <Pending />
          <InProgress />
          <Completed />
        </div>
        <button className="add-task">ADD TASK</button>
      </div>
    </>
  );
};

export default App;
