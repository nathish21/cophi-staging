// src/api/userService.js
import axiosInstance from "./axiosInstance";

export const getCatalogs = async () => {
  try {
    const response = await axiosInstance.get(`/api/ngoCategory/category`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data", error);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/api/ngo/login", userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error login/register user", error);
    throw error;
  }
};

export const updateNgoDetails = async (userData) => {
  try {
    let userId = sessionStorage.getItem("userId");
    const response = await axiosInstance.put("/api/ngo/" + userId, userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error login/register user", error);
    throw error;
  }
};
export const getNgoDetails = async () => {
  try {
    let userId = sessionStorage.getItem("userId");
    const response = await axiosInstance.get("/api/ngo/" + userId);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching NGO details", error);
    throw error;
  }
};

export const loginDonor = async (userData) => {
  try {
    const response = await axiosInstance.post("/api/donor/login", userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error login/register donor", error);
    throw error;
  }
};
