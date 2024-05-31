// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://newt-direct-noticeably.ngrok-free.app',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json',"ngrok-skip-browser-warning": "true" },
});

// Add a request interceptor if needed
axiosInstance.interceptors.request.use(
  config => {
    // Do something before request is sent
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor if needed
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
