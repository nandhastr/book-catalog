import Category from "../../models/categoryModels.js";
import updateData from "../../services/updateData.js";
const updateCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const { name_category } = req.body;

        const data = await updateData(Category, id, { name_category });
        res.status(200).send({"message": "Kategori berhasil diupdate", "data": data});
    } catch (error) {
        res.status(500).send({error: "Gagal mengupdate kategori"});
    }
}

export default updateCategory;