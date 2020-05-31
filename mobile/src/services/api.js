import axios from 'axios';

const api = axios.create({
  baseURL: 'https://caderninhobmg.herokuapp.com',
});

export default api;
