import axios from 'axios';
const BASE_URL = 'https://api-rest.elice.io/org/academy/';
const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
