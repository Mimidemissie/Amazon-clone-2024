import axios, { Axios } from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-2024-bed79/us-central1/api",
  baseURL: "https://amazon-api-2q57.onrender.com/",
});

export { axiosInstance };
