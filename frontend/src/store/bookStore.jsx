import { create } from "zustand";
import apiService from './../../service/apiService.jsx';
import { APIEndpoint } from "../../enum/APIendPoint.js";


const bookAPI = apiService("books");

const useBookStore = create((set) => ({
    books: [],
    booksByCategory: [],
    loading: false,
    error: null,

    fetchBooks: async () => {
        set({ loading: true });
        try {
            const res = await bookAPI.getAll();
            set({ books: res.data, loading: false });
        } catch (err) {
            set({ error: err.message, loading: false });
        }
    },

    fetchBooksByCategory: async (categoryId) => {
        set({ loading: true });
        try {
            const res = await bookAPI.getByCategory(categoryId);
            set({ booksByCategory: res.data, loading: false }); 
        } catch (err) {
            set({ error: err.message, loading: false });
        }
    },

    getBookById: async (id) => {
        try {
            const res = await bookAPI.getById(id);
            return res.data;
        } catch (error) {
            set({ error });
        }
    },

    createBook: async (data) => {
        try {
            await bookAPI.create(data);
        } catch (err) {
            set({ error: err.message });
        }
    },

    updateBook: async (id, data) => {
        try {
            await bookAPI.update(id, data);
        } catch (err) {
            set({ error: err.message });
        }
    },

    deleteBook: async (id) => {
        try {
            await bookAPI.remove(id);
        } catch (err) {
            set({ error: err.message });
        }
    },
}));

export default useBookStore;
