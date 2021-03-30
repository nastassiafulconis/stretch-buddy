import React, {Fragment, useState} from 'react';
import ImageMap from './ImageMap.jsx';

const App = () => {
  const [activity,setActivity] = useState('Stretch');
  const [inActivity,setInActivity] = useState('Workout');

  const handleActivityChange = () => {
    if (activity === 'Stretch') {
      setActivity('Workout');
      setInActivity('Stretch');
    } else {
      setActivity('Stretch');
      setInActivity('Workout');
    }
  };

  return (
    <Fragment>
      <h1>Welcome to {activity} Buddy!</h1>
      <ImageMap activity={activity}/>
      <button onClick={handleActivityChange}>I want to {inActivity}</button>
    </ Fragment>
  );
};

export default App;