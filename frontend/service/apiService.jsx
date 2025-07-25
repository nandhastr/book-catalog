import { APIEndpoint } from "../enum/APIendPoint.js";
import axiosInstance from "./axiosInstance.js";

const baseUrl = APIEndpoint.BASE_URL;

const apiService = (endPoint) => ({
    getAll: () => axiosInstance.get(`${baseUrl}/${endPoint}`),

    getById: (id) =>
        axiosInstance.get(`${baseUrl}/${endPoint}/${id}`),

    getByCategory: (categoryId) =>
        axiosInstance.get(`${baseUrl}/books/category/${categoryId}`),

    create: (data) =>
        axiosInstance.post(`${baseUrl}/${endPoint}`, data),

    update: (id, data) =>
        axiosInstance.put(`${baseUrl}/${endPoint}/${id}`, data),

    remove: (id) =>
        axiosInstance.delete(`${baseUrl}/${endPoint}/${id}`),
});

export default apiService;
