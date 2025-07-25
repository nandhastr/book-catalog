import Category from "../../models/categoryModels.js";
import deleteData from "../../services/deleteData.js";

const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await deleteData(Category, id);

        if (!result) {
            return res.status(404).send({ error: "Kategori tidak ditemukan" });
        } else {
            return res.status(200).send({ message: "Kategori berhasil dihapus" });
        }
    } catch (error) {
        res.status(500).send({ error: "Gagal menghapus kategori" });
    }
};

export default deleteCategory;
