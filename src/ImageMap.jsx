import React, {useRef, Fragment} from 'react';
import Video from './Video.jsx';
import searchYoutube from './utils/searchYoutube.js';
import data from './utils/svg.js';

const MapTest = () => {
  const ref = useRef(null);

  const handleClick = (name) => {
    searchYoutube.get('/search', {
      params: {
        q: `${name} Stretch`
      }
    })
      .then(({data}) => {
        console.log(data);
        ref.current.openModal(data.items[0]);
      })
      .catch((err) => {
        console.error(`error getting data from api: ${err}`);
      });
  }

  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="1056"
        height="816"
        viewBox="0 0 1056 816"
      >
        <image
          width="1060"
          height="820"
          preserveAspectRatio="none"
          transform="translate(-.5 -.5)"
          xlinkHref={data}
        ></image>
        <a xlinkHref="#" name="neck">
          <path
            fill="#fff"
            stroke="#000"
            d="M209.5 179.5h50v50h-50z"
            onClick={() => handleClick('neck')}
          ></path>
        </a>
      </svg>
      <Video ref={ref} name="Neck"/>
    </Fragment>
  );
};

export default MapTest;
