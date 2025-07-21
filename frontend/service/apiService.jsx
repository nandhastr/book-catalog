import axios from "axios";
import { APIEndpoint } from "../enum/APIendPoint.js";

const baseUrl = APIEndpoint.BASE_URL;

const getToken = () => localStorage.getItem("accessToken");

const apiService = (endPoint) => ({
    getAll: () =>
        axios.get(`${baseUrl}/${endPoint}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        }),

    getById: (id) =>
        axios.get(`${baseUrl}/${endPoint}/${id}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        }),

    getByCategory: (categoryId) =>
        axios.get(`${baseUrl}/books/category/${categoryId}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        }),

    create: (data) =>
        axios.post(`${baseUrl}/${endPoint}`, data, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        }),

    update: (id, data) =>
        axios.put(`${baseUrl}/${endPoint}/${id}`, data, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        }),

    remove: (id) =>
        axios.delete(`${baseUrl}/${endPoint}/${id}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        }),
});

export default apiService;
