import React, {useRef, Fragment} from 'react';
import Video from './Video.jsx';
import data from './utils/svg.js';
import axios from 'axios';

const ImageMap = ({activity}) => {
  const ref = useRef(null);

  const handleClick = (name) => {
    axios.get(`/videos/${name} ${activity}`)
      .then(({data}) => {
        ref.current.openModal(data[0].videoId, data[0].query);
      })
      .catch((err) => {
        console.error(`error getting data from server: ${err}`);
      });
  };

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
              d="M209.5 179.5h50v50h-50z"
              onClick={() => handleClick('Neck')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M209.5 319.5h60v110h-60z"
              onClick={() => handleClick('Abdominal')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M139.5 229.5h50v60h-50zm150-10h50v60h-50z"
              onClick={() => handleClick('Shoulder')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M269.5 319.5h40v90h-40z"
              onClick={() => handleClick('Oblique')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M189.5 79.5h90v100h-90z"
              onClick={() => handleClick('Head')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M179.5 319.5h30v80h-30z"
              onClick={() => handleClick('Oblique')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M199.5 239.5h80v60h-80z"
              onClick={() => handleClick('Chest')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M299.5 259.5h60v90h-60z"
              onClick={() => handleClick('Bicep')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M129.5 289.5h50v70h-50z"
              onClick={() => handleClick('Bicep')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M259.5 419.5h50v50h-50z"
              onClick={() => handleClick('Hip Flexor')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M179.5 429.5h50v60h-50z"
              onClick={() => handleClick('Hip Flexor')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M219.5 469.5h50v80h-50z"
              onClick={() => handleClick('Inner Thigh')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M169.5 479.5h40v80h-40z"
              onClick={() => handleClick('Quad')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M279.5 469.5h40v80h-40z"
              onClick={() => handleClick('Quad')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M319.5 369.5h50v80h-50z"
              onClick={() => handleClick('Forearm')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M130.9952 377.4487L169.5 355.218l32.8349 56.8717-38.5048 22.2307z"
              onClick={() => handleClick('Forearm')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M319.5 449.5h40v60h-40z"
              onClick={() => handleClick('Hand')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M178.8045 417.6489l24.783 17.3532-29.3045 41.8511-24.783-17.3532z"
              onClick={() => handleClick('Hand')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M249.5 549.5h60v60h-60z"
              onClick={() => handleClick('Knee')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M163.596 579.8474L219.4999 559.5l17.4742 48.0099-55.9039 20.3474z"
              onClick={() => handleClick('Knee')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M249.5 619.5h60v60h-60z"
              onClick={() => handleClick('Shin')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M179.9147 630.2682l55.9039-20.3474 23.6673 65.0255-55.9039 20.3474z"
              onClick={() => handleClick('Shin')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M259.5 689.5h40v40h-40z"
              onClick={() => handleClick('Ankle')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M219.5 699.5h40v40h-40z"
              onClick={() => handleClick('Ankle')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M270.5961 726.9712l22.5288-18.9039 38.7092 46.1318-22.5288 18.9039z"
              onClick={() => handleClick('Foot')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M193.1095 755.7954l37.0394-44.1419 30.6418 25.7115-37.0394 44.1419z"
              onClick={() => handleClick('Foot')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M714.2442 718.6924h49.2208v56.6509h-49.2208z"
              onClick={() => handleClick('Achilles')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M770.9664 766.4202l-10.0061-56.7477 39.3923-6.9459 10.0061 56.7477z"
              onClick={() => handleClick('Achilles')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M700.2792 639.5H749.5v76.6509h-49.2208z"
              onClick={() => handleClick('Calf')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M756.6574 694.7846l25.9937-71.417 40.4303 14.7154-25.9937 71.417z"
              onClick={() => handleClick('Calf')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M700.2792 569.5H749.5v66.6509h-49.2208z"
              onClick={() => handleClick('Back of Knee')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M779.5 614.5618l4.1967-47.9688 56.4437 4.9382-4.1967 47.9688z"
              onClick={() => handleClick('Back of Knee')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M700.2792 459.5H759.5v116.6509h-59.2208z"
              onClick={() => handleClick('Hamstring')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M771.3444 570.5807l-9.5825-109.5288 50.4884-4.4172 9.5825 109.5288z"
              onClick={() => handleClick('Hamstring')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M699.5 429.5h40v50h-40z"
              onClick={() => handleClick('Gluteus Maximus')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M792.1807 500.1403l-6.0777-69.4682 39.6962-3.473 6.0777 69.4682z"
              onClick={() => handleClick('Gluteus Maximus')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M709.5 389.5h110v50h-110z"
              onClick={() => handleClick('Lower Back')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M719.5 319.5h90v60h-90z"
              onClick={() => handleClick('Middle Back')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M719.5 259.5h90v60h-90z"
              onClick={() => handleClick('Upper Back')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M699.5 219.5h140v40h-140z"
              onClick={() => handleClick('Trapezius')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M809.5 269.5h30v40h-30z"
              onClick={() => handleClick('Armpit')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M699.5 279.5h30v40h-30z"
              onClick={() => handleClick('Armpit')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M830.708 269.2006l20.2581-9.4465 37.6849 80.8156-20.2581 9.4465z"
              onClick={() => handleClick('Tricep')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M677.2377 261.4615l32.3023 15.0628-38.0356 81.5677-32.3023-15.0628z"
              onClick={() => handleClick('Tricep')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M800.3319 417.7644L839.5 399.5l22.9813 49.2837-39.1681 18.2644z"
              onClick={() => handleClick('Wrist')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M644.6996 443.4658l34.4271-9.2247 13.8398 51.6507-34.4271 9.2247z"
              onClick={() => handleClick('Wrist')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M719.5 99.5h80v110h-80z"
              onClick={() => handleClick('Back of Neck')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M649.5 349.5h40v70h-40z"
              onClick={() => handleClick('Elbow')}
            ></path>
          </a>
          <a xlinkHref="#">
            <path
              fillOpacity="0"
              d="M849.5 329.5h40v60h-40z"
              onClick={() => handleClick('Elbow')}
            ></path>
          </a>

        </svg>
      <Video ref={ref} />
    </Fragment>
  );
};

export default ImageMap;
