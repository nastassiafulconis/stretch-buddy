import React, {useRef, Fragment} from 'react';
import Video from './Video.jsx';
import searchYoutube from './utils/searchYoutube.js';

const BodyPart = ({name}) => {
  const ref = useRef(null);

  const handleClick = () => {
    searchYoutube.get('/search', {
      params: {
        q: `${name} Stretch`
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
      <button onClick={handleClick} id={name} className="body-part">{name} Stretch</button>
      <Video ref={ref} name={name}/>
    </Fragment>
  );
};

export default BodyPart;