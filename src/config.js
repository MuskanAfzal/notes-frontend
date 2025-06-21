// src/config.js
const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://your-production-api-url.com' // Replace this when deploying
    : 'http://localhost:8080';

export default BASE_URL;
