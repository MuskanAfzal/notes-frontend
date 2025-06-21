// src/config.js
const BASE_URL =
  process.env.REACT_APP_BASE_URL ||
  (process.env.NODE_ENV === 'production'
    ? 'https://notes-backend-production-f8ab.up.railway.app'
    : 'http://localhost:8080');

export default BASE_URL;
