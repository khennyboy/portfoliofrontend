// src/lib/api.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_SITE_URL || "http://localhost:3000",
});

export default api;
