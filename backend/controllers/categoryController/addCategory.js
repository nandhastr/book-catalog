import Category from "../../models/categoryModels.js";
import createData from "../../services/createData.js";
const addCategory = async (req, res) => {
    try {
        const { name_category } = req.body;
        const data = await createData(Category, { name_category });
        res.status(200).json({
            message: "Kategori berhasil ditambahkan",
            data: data,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default addCategory;
