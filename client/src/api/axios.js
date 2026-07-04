import axios from "axios";

const api = axios.create({
  baseURL: "https://learnpath-lms-backend.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;