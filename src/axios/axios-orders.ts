import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cook-book-49a05.firebaseio.com/',
});

export default instance;
