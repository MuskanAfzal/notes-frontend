// src/config.js
const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://notes-backend-production-f8ab.up.railway.app' // Replace this when deploying
    : 'http://localhost:8080';

export default BASE_URL;
