import { create } from "zustand";
import axios from "axios";

import { APIEndpoint } from "../../enum/APIendPoint";
import apiService from "../../service/apiService";

const userAPI = apiService("users");

const useUserStore = create((set) => ({
    users: [],
    currentUser: null,
    loading: false,
    error: null,
    token: null,

    setCurrentUser: (name) => set({ currentUser: name }),
    setToken: (token) => set({ token }),

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
            const res = await userAPI.getAll();
            set({ users: res.data });
        } catch (err) {
            set({ error: err.message });
        }
    },

    updateUser: async (id, data) => {
        try {
            await userAPI.update(id, data);
            const res = await userAPI.getAll(); 
            set({ users: res.data });
        } catch (err) {
            set({ error: err.message });
        }
    },

    deleteUser: async (id) => {
        try {
            await userAPI.remove(id);
            const res = await userAPI.getAll(); 
            set({ users: res.data });
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
            set({ currentUser: null });
        } catch (err) {
            set({ error: err.message });
        }
    },
}));
export default useUserStore;
