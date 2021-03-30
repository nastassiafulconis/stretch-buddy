import React, {useRef, Fragment} from 'react';
import Video from './Video.jsx';
import searchYoutube from './utils/searchYoutube.js';

const Body = ({q}) => {
  const ref = useRef(null);

  const handleClick = () => {
    searchYoutube.get('/search', {
      params: {
        q,
      }
    })
      .then(({data}) => {
        console.log(data);
        ref.current.openModal(data.items[0].id.videoId);
      })
      .catch((err) => {
        console.error(`error getting data from api: ${err}`);
      });
  }

  return (
    <Fragment>
      <button onClick={handleClick}>Show Modal!</button>
      <Video ref={ref} name={q}/>
    </Fragment>
  );
};

export default Body;