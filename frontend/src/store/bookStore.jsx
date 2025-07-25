import { create } from "zustand";
import apiService from "./../../service/apiService.jsx";
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
            alert("Buku berhasil ditambahkan!");
            set({ error: null })
            return true;
        } catch (err) {
            const message = err.response?.data.error || err.response?.data?.message || err.message;
            set({ error: typeof message === "string" ? message : JSON.stringify(message) });
            return false;

        }
    },

    
    updateBook: async (id, data) => {
        try {
            await bookAPI.update(id, data);
             alert("Buku berhasil diupdate!");
             set({ error: null });
             return true;
        } catch (err) {
            set({ error: err.message });
             const message = err.response?.data.error || err.response?.data?.message || err.message;
             set({ error: typeof message === "string" ? message : JSON.stringify(message) });
             return false;
        }
    },

    deleteBook: async (id) => {
        try {
            await bookAPI.remove(id);
        } catch (err) {
            set({ error: err.message });
        }
    },

    clearError: ()=> set({error: null})
}));

export default useBookStore;
