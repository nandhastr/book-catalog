import User from "../../models/userModels.js";
import getFindUser from "../userController/getFindUsers.js";

const Logout = async (req, res) => {
    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];

        if (!token) return res.status(401).json({ message: "Anda belum login" });
        
        const user = await User.findOne({ where: { token } });

        if (!user) {
            return res.status(401).send({ message: "Token tidak valid atau Anda belum login" });
        };

        const userId = user.id;
        await User.update({ token: null }, { where: { id: userId } });

        res.clearCookie("refreshToken");
        res.status(200).send({ message: "Logout berhasil" });
    } catch (error) {
        res.status(500).send({ msg: `Terjadi kesalahan: ${error.message}` });
        
    }
}

export default Logout;