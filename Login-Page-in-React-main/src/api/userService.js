// src/api/userService.js
import axiosInstance from './axiosInstance';

export const getCatalogs = async () => {
  try {
    const response = await axiosInstance.get(`/api/ngoCategory/category`);
    console.log(response.data)
    return response.data;

  } catch (error) {
    console.error('Error fetching user data', error);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/api/ngo/login', userData);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error login/register user', error);
    throw error;
  }
};
