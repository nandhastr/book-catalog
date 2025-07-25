import fs from "fs";
import path from "path";

import Books from "../../models/bookModels.js";
import getById from "../../services/getById.js";
import updateData from "../../services/updateData.js";

const updateBook = async (req, res) => {
    try {
        const id = req.params.id;
        const { categoryId, title, author, description, year } = req.body;

        const imgPath = req.file?.filename;
        const oldData = await getById(Books, id);
        if (!oldData) {
            return res.status(404).send({ error: "Data tidak ditemukan" });
        }

        if (imgPath && oldData.imgUrl) {
            const oldImgPath = path.join("assets", "img", oldData.imgUrl);

            if (fs.existsSync(oldImgPath)) {
                fs.unlinkSync(oldImgPath);
            }
        }

        const data = await updateData(Books, id, { categoryId, title, author, description, year, imgUrl: imgPath || oldData.imgUrl });

        res.status(200).send({ message: "Buku berhasil diupdate", data: data });
    } catch (error) {
        res.status(500).send({ error: "Gagal mengupdate buku" });
    }
};

export default updateBook;
