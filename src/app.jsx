import React, {Fragment, useState} from 'react';
import ImageMap from './ImageMap.jsx';
import Nav from './Nav.jsx';
import Toggle from './Toggle.jsx';

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
      <Nav activity={activity} />
      <ImageMap activity={activity}/>
      <Toggle inActivity={inActivity} handleActivityChange={handleActivityChange}/>
    </ Fragment>
  );
};

export default App;