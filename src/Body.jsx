import React, {useRef, Fragment} from 'react';
import Video from './Video.jsx';

const Body = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.openModal()
  }

  return (
    <Fragment>
      <button onClick={handleClick}>Show Modal! </button>
      <Video ref={ref}/>
    </Fragment>
  );
};

export default Body;