import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const loginUser = (userData) => axios.post(`${API_URL}/login`, userData);
export const registerUser = (userData) => axios.post(`${API_URL}/register`, userData);
export const forgotPassword = (email) => axios.post(`${API_URL}/forgotpassword`, { email });
