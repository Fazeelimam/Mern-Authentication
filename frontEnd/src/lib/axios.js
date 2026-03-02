import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const axiosInstance = axios.create({
    baseURL: `${API_URL}/api`,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    }
});

// Add response interceptor to handle 401 errors silently
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Don't show errors for 401 on /getuser (user just not logged in)
        if (error.config.url === '/getuser' && error.response?.status === 401) {
            // Silently fail - this is expected when not logged in
            return Promise.reject(error);
        }

        return Promise.reject(error);
    }
);