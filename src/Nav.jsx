import React, {useRef, useState} from 'react';
import searchYoutube from './utils/searchYoutube.js';
import Video from './Video.jsx';

const Nav = ({handleActivityChange, activity, inActivity}) => {
  const ref = useRef(null);

  const [query, setQuery] = useState('');
  const onChange = (e) => {
    setQuery(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchYoutube.get('/search', {
      params: {
        q: `${query} ${activity}`
      }
    })
      .then((data) => {
        console.log(data);
        ref.current.openModal(data.data.items[0].id.videoId, data.config.params.q);
      })
      .then(() => {
        setQuery('');
      })
      .catch((err) => {
        console.error(`error getting data from api: ${err}`);
      });
  }

  return (
    <nav id="nav">
      <h1>Welcome to {activity} Buddy!</h1>
      <button onClick={handleActivityChange}>I want to {inActivity} instead</button>
      <form id='search-form' onSubmit={handleSearch}>
        <input placeholder='enter a body part' aria-label="activity search" className='search-bar' value={query} onChange={onChange}></input>
        <button aria-label="search for product" id='search-form-btn'  form='search-form' type='submit'><i className="fas fa-search"></i></button>
      </form>
      <Video ref={ref} />
    </nav>
  );
};

export default Nav;