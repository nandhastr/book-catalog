import { APIEndpoint } from "../enum/APIendPoint.js";
import axiosInstance from "./axiosInstance.js";

const BASE_URL = APIEndpoint.BASE_URL;

const authService = {
    register: async ({ name, email, password, role }) => {
        return await axiosInstance.post(`${BASE_URL}/${APIEndpoint.REGISTER}`, {
            name,
            email,
            password,
            role,
        });
    },

    login: async ({ email, password }) => {
        return await axiosInstance.post(`${BASE_URL}/${APIEndpoint.LOGIN}`, {
            email,
            password,
        });
    },

    logoutAPI: () => {
        const token = localStorage.getItem("accessToken");
        return axiosInstance.post(`${APIEndpoint.BASE_URL}/logout`, null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
    },
};

export default authService;
