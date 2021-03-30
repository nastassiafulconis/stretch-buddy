import React, {useRef, Fragment} from 'react';
import Video from './Video.jsx';
import searchYoutube from './utils/searchYoutube.js';
import data from './utils/svg.js';

const ImageMap = () => {
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
      className="background"
    >
      <image
        width="1060"
        height="820"
        preserveAspectRatio="none"
        transform="translate(-.5 -.5)"
        xlinkHref={data}
        ></image>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              stroke="#fff"
              d="M209.5 179.5h50v50h-50z"
              onClick={() => handleClick('neck')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              stroke="#fff"
              d="M209.5 319.5h60v110h-60z"
              onClick={() => handleClick('abdominals')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              stroke="#fff"
              d="M139.5 229.5h50v60h-50zm150-10h50v60h-50z"
              onClick={() => handleClick('shoulders')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              stroke="#fff"
              d="M269.5 319.5h40v90h-40z"
              onClick={() => handleClick('obliques')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              stroke="#fff"
              d="M189.5 79.5h90v100h-90z"
              onClick={() => handleClick('head')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              stroke="#fff"
              d="M179.5 319.5h30v80h-30z"
              onClick={() => handleClick('obliques')}
            ></path>
          </a>
        </svg>
      <Video ref={ref} />
    </Fragment>
  );
};

export default ImageMap;
