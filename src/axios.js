
// src/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/student/', // Replace with your API base URL
  timeout: 1000,
  headers: { 'X-Custom-Header': 'rady' }
});

export default axiosInstance;