// src/config/api.ts
import axios from "axios";

// Forcer l'URL complète pour test
const API_BASE_URL = "https://server-portfolio-abx5.onrender.com";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;