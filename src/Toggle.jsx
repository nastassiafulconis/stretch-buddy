import React from 'react';

const Toggle = ({handleActivityChange, inActivity}) => {
  return (
    <div className="toggle-container">
      <button onClick={handleActivityChange} id="toggle">I want to <span id="toggle-text">{inActivity.toLowerCase()}</span> instead!</button>
    </div>
  )
};

export default Toggle;