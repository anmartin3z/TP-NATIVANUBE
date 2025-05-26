// src/config/axiosApi2Config.js
import axios from 'axios';

const api2 = axios.create({
    baseURL: 'http://localhost:5001/api/', // o usa '/api2/' si estás usando el proxy en vite
    headers: {
        'Content-Type': 'application/json',
    },
});

api2.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api2;
