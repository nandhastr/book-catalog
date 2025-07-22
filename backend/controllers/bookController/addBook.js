import Books from "../../models/bookModels.js";
import createData from "../../services/createData.js";

const addBook = async (req, res) => {
    try {
        const { categoryId, title, author, description, year } = req.body;
        

        const imgPath = req.file ? `${req.file.filename}`: null;

        const data = await createData(Books, { categoryId, title, author, description, year, imgUrl: imgPath });

        res.status(200).json({"message": "Buku berhasil ditambahkan", "data": data});
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
}

export default addBook;