import React from 'react';
import '../../styles/pending.scss';
import PendingContainer from './PendingContainer';

const Pending = () => {

  return (
    <>
      <div className="pending-container">
        <h1>Pending</h1>
        <PendingContainer />
      </div>
    </>
  );
};

export default Pending;
