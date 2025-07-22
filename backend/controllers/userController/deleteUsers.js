import User from "../../models/userModels.js";
import remove from "../../services/deleteData.js";

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await remove(User, id); 
        res.status(200).json({ message: "User deleted" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

export default deleteUser;
