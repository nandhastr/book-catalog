import axios from "axios";

export const testConnection = async () => {
    try {
        const res = await axios.get("/api/users"); 
        console.log("konekasi berhasil ke backend:", res.data);
        return res.data;
    } catch (err) {
        console.error("Gagal koneksi ke backend:", err.message);
        throw err;
    }
};
