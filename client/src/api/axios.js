import axios from "axios";

const api = axios.create({
  baseURL: "https://learnpath-lms.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;