// src/services/crudService.js
import axios from "axios";
import { APIEndpoint } from "../enum/APIendPoint.js";

const baseUrl = APIEndpoint.BASE_URL;

const apiService = (endPoint) => ({
    getAll: () => axios.get(`${baseUrl}/${endPoint}`),
    getById: (id) => axios.get(`${baseUrl}/${endPoint}/${id}`),
    getByCategory: (categoryId) => axios.get(`${baseUrl}/books/category/${categoryId}`),
    create: (data) => axios.post(`${baseUrl}/${endPoint}`, data),
    update: (id, data) => axios.put(`${baseUrl}/${endPoint}/${id}`, data),
    remove: (id) => axios.delete(`${baseUrl}/${endPoint}/${id}`),
});

export default apiService;
            