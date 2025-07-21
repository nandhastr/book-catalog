import { create } from "zustand";
import apiService from "../services/crudService";
import axios from "axios";
import { APIEndpoint } from "../../enum/APIendPoint";

const userAPI = apiService("users");

const useUserStore = create((set) => ({
    users: [],
    loading: false,
    error: null,

    fetchUsers: async () => {
        set({ loading: true });
        try {
            const res = await userAPI.getAll();
            set({ users: res.data, loading: false });
        } catch (err) {
            set({ error: err.message, loading: false });
        }
    },

    createUser: async (data) => {
        try {
            await userAPI.create(data);
        } catch (err) {
            set({ error: err.message });
        }
    },

    updateUser: async (id, data) => {
        try {
            await userAPI.update(id, data);
        } catch (err) {
            set({ error: err.message });
        }
    },

    deleteUser: async (id) => {
        try {
            await userAPI.remove(id);
        } catch (err) {
            set({ error: err.message });
        }
    },
    logoutUser: async () => {
        try {
            const token = localStorage.getItem("accessToken");
            if (!token) throw new Error("Token tidak ditemukan");

            await axios.post(`${APIEndpoint.BASE_URL}/logout`, null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            });



            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
        } catch (err) {
            set({ error: err.message });
        }
    },
}));

export default useUserStore;
