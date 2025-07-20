import Category from "../../models/categoryModels.js";
import getData from "../../services/getData.js";
const getCategory = async (req, res) => {
    try {
        const data = await getData(Category);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default getCategory;
