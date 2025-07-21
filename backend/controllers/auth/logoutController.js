import User from "../../models/userModels.js";

const Logout = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(" ")[1];

        if (!token) return res.status(401).json({ message: "Anda belum login" });

        const user = await User.findOne({ where: { token } });
        if (!user) {
            return res.status(401).json({ message: "Token tidak valid atau Anda belum login" });
        }

        await User.update({ token: null }, { where: { id: user.id } });

        res.clearCookie("refreshToken");
        res.status(200).json({ message: "Logout berhasil" });
    } catch (error) {
        res.status(500).json({ message: `Terjadi kesalahan: ${error.message}` });
    }
};

export default Logout;
