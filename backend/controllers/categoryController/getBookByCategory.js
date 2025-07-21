import Book from "../../models/bookModels.js";
import Category from "../../models/categoryModels.js";

const getBooksByCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;

        const books = await Book.findAll({
            where: { categoryId },
            include: [
                {
                    model: Category,
                    as: "category", 
                    attributes: ["name_category"],
                },
            ],
        });

        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default getBooksByCategory;
