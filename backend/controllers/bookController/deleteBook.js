import Books from "../../models/bookModels.js";
import deleteData from "../../services/deleteData.js";

const deleteBook = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await deleteData(Books, id);

        if (!result) {
            return res.status(404).send({ error: "buku tidak ditemukan" });
        } else {
            return res.status(200).send({ message: "buku berhasil dihapus" });
        }
    } catch (error) {
        res.status(500).send({ error: "gagal menghapus buku" });
    }
};

export default deleteBook;
