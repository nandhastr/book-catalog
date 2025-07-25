import User from "../../models/userModels.js";

const getFindUser = async (criteria) => {
    try {
        const user = await User.findOne(criteria);
        return user;
    } catch (error) {
        console.error("gagal mencari user:", error.message);
        throw error;
    }
};

export default getFindUser;
