import { create } from "zustand";
import apiService from "../../service/apiService";

const categoryAPI = apiService("categories");

const useCategoryStore = create((set) => ({
    categories: [],
    loading: false,
    error: null,

    fetchCategories: async () => {
        set({ loading: true });
        try {
            const res = await categoryAPI.getAll();
            set({ categories: res.data, loading: false });
        } catch (err) {
            set({ error: err.message, loading: false });
        }
    },

    createCategory: async (data) => {
        try {
            await categoryAPI.create(data);
        } catch (err) {
            set({ error: err.message });
        }
    },

    updateCategory: async (id, data) => {
        try {
            await categoryAPI.update(id, data);
        } catch (err) {
            set({ error: err.message });
        }
    },

    deleteCategory: async (id) => {
        try {
            await categoryAPI.remove(id);
        } catch (err) {
            set({ error: err.message });
        }
    },
}));

export default useCategoryStore;
