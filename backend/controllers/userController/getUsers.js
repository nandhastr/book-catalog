import User from "../../models/userModels.js";
import getData from "../../services/getData.js";
const getUsers = async (req, res) => {
    try {
        const data = await getData(User);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default getUsers;
