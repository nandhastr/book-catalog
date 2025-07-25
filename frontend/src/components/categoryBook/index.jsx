import React, { useEffect, useState } from "react";
import useCategoryStore from "../../store/categoryStore";
import useBookStore from "../../store/bookStore";
import CardBook from "../common/Card";

const CategoryBook = () => {
    const { categories, fetchCategories } = useCategoryStore();
    const { booksByCategory, fetchBooksByCategory, loading } = useBookStore();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showAll, setShowlAll] = useState(false);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    const handleClick = async (category) => {
        setSelectedCategory(category);
        await fetchBooksByCategory(category.id);
    };

    const handleLihatSemua = () => {
        setShowlAll(true);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Kategori Buku</h2>
            <div className="flex flex-wrap gap-3 mb-6">
                {categories.map((cat) => (
                    <button key={cat.id} onClick={() => handleClick(cat)} className={`px-4 py-2 rounded-md cursor-pointer ${selectedCategory?.id === cat.id ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}>
                        {cat.name_category}
                    </button>
                ))}
            </div>

            {selectedCategory && (
                <div>
                    <h3 className="text-xl font-bold mb-3">
                        Buku dalam kategori: <span className="text-blue-600">{selectedCategory.name_category}</span>
                    </h3>
                    <div className="flex flex-grow justify-center relative">
                        {loading ? <p className="text-gray-500">Loading...</p> : Array.isArray(booksByCategory) && booksByCategory.length > 0 ? <CardBook data={booksByCategory} loading={loading} limit={showAll ? null : 10} /> : <p className="text-gray-500 italic">Belum ada buku di kategori ini.</p>}
                        <button onClick={handleLihatSemua} className="absolute top-0 right-0 px-1 py-1 bg-green-600 text-white text-[0.5rem] rounded hover:bg-[#fdf2ec]  hover:text-gray-500 transition-all duration-500">
                            Lihat Semua
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryBook;
