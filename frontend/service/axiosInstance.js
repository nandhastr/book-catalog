import axios from "axios";
import { APIEndpoint } from "../enum/APIendPoint";


const axiosInstance = axios.create({
    baseURL: `${APIEndpoint.BASE_URL}`, 
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const errMsg = error?.response?.data?.message;

        // Deteksi token kadaluarsa
        if (error?.response?.status === 401 && errMsg?.toLowerCase().includes("jwt expired")) {
            // Hapus data auth dari localStorage
            localStorage.removeItem("accessToken");
            localStorage.removeItem("role");

            // Redirect ke login
            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
