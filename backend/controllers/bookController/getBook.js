import Books from "../../models/bookModels.js";
import getData from "../../services/getData.js";

const getBook = async (req, res) => {
    try {
        const data = await getData(Books);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default getBook;
