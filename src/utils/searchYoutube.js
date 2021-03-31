import axios from 'axios';
const key = process.env.TOKEN;

export default axios.create(
  {
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
      part:'snippet',
      maxResults: 1,
      order: 'rating',
      key,
    }
  }
);

