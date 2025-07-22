import axios from "axios";
import { APIEndpoint } from "../enum/APIendPoint";

const BASE_URL = APIEndpoint.BASE_URL;

const authService = {
    register: async ({ name, email, password, role }) => {
        return await axios.post(`${BASE_URL}/${APIEndpoint.REGISTER}`, {
            name,
            email,
            password,
            role,
        });
    },

    login: async ({ email, password }) => {
        return await axios.post(`${BASE_URL}/${APIEndpoint.LOGIN}`, {
            email,
            password,
        });
    },

    logoutAPI: () => {
        const token = localStorage.getItem("accessToken");
        return axios.post(`${APIEndpoint.BASE_URL}/logout`, null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
    },
    getMe: async () => {
        const token = localStorage.getItem("accessToken");
        return await axios.get(`${BASE_URL}/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
};

export default authService;
