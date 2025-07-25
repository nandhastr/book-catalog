import User from "../../models/userModels.js";
import update from "../../services/updateData.js";

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, role } = req.body;

        if (!name || !email || !role) {
            return res.status(400).json({ message: "Field tidak boleh kosong" });
        }

        const user = await update(User, id, { name, email, role });
        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json({ message: "User updated", user });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

export default updateUser;
