import React, {Fragment, useState} from 'react';
import ImageMap from './ImageMap.jsx';
import Nav from './Nav.jsx';

const App = () => {
  const [activity, setActivity] = useState('Stretch');
  const [inActivity, setInActivity] = useState('Workout');

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
      <Nav activity={activity} inActivity={inActivity} handleActivityChange={handleActivityChange}/>
      <ImageMap activity={activity}/>
    </ Fragment>
  );
};

export default App;