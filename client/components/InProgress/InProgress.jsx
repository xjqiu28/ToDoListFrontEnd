import React from 'react';
import '../../styles/inprogress.scss';
import InProgressContainer from './InProgressContainer';

const InProgress = () => {
  return (
    <>
      <div className="inprogress-container">
        <h1>In Progress</h1>
        <InProgressContainer />
      </div>
    </>
  );
};

export default InProgress;
