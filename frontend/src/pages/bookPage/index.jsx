import React, { useEffect, useState } from "react";
import BookTable from "../../components/bookTableManagement";
import useBookStore from "../../store/bookStore";
import useCategoryStore from "../../store/categoryStore";

const initialForm = {
    title: "",
    author: "",
    description: "",
    year: "",
    categoryId: "",
    imgUrl: "",
};

const BookPageManagement = () => {
    const { books, fetchBooks, createBook, updateBook, deleteBook } = useBookStore();
    const { categories, fetchCategories } = useCategoryStore();


    const [formData, setFormData] = useState(initialForm);
    const [isEdit, setIsEdit] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
      fetchBooks();
       fetchCategories();
    }, [fetchBooks, fetchCategories]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "imgUrl") {
            setFormData({ ...formData, imgUrl: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = new FormData();
        Object.entries(formData).forEach(([key, val]) => payload.append(key, val));

        if (isEdit) {
            await updateBook(editId, payload);
        } else {
            await createBook(payload);
        }

        await fetchBooks();
        setFormData(initialForm);
        setShowForm(false);
        setIsEdit(false);
        setEditId(null);
    };

    const handleAdd = () => {
        setShowForm(true);
        setFormData(initialForm);
        setIsEdit(false);
    };

    const handleEdit = (book) => {
        setShowForm(true);
        setIsEdit(true);
        setEditId(book.id);
        setFormData({
            title: book.title,
            author: book.author,
            description: book.description,
            year: book.year,
            categoryId: book.categoryId,
            imgUrl: null, 
        });
    };

    const handleDelete = async (id) => {
        if (confirm("Yakin ingin menghapus buku ini?")) {
            await deleteBook(id);
            await fetchBooks();
        }
    };

    return (
        <div className="p-6">
            <BookTable books={books} onAdd={handleAdd} onEdit={handleEdit} onDelete={handleDelete} />

            {showForm && (
                <form onSubmit={handleSubmit} className="mt-6 p-4 bg-gray-100 rounded-md shadow-md max-w-xl mx-auto" encType="multipart/form-data">
                    <h2 className="text-lg font-bold mb-4">{isEdit ? "Edit Buku" : "Tambah Buku"}</h2>

                    <div className="mb-4">
                        <label htmlFor="title" className="block font-medium mb-1">
                            Judul
                        </label>
                        <input id="title" name="title" type="text" value={formData.title} onChange={handleChange} className="input" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="author" className="block font-medium mb-1">
                            Penulis
                        </label>
                        <input id="author" name="author" type="text" value={formData.author} onChange={handleChange} className="input" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block font-medium mb-1">
                            Deskripsi
                        </label>
                        <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="input" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="year" className="block font-medium mb-1">
                            Tahun
                        </label>
                        <input id="year" name="year" type="number" value={formData.year} onChange={handleChange} className="input" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="categoryId" className="block font-medium mb-1">
                            Kategori
                        </label>
                        <select id="categoryId" name="categoryId" value={formData.categoryId} onChange={handleChange} className="input" required>
                            <option value="">-- Pilih Kategori --</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name_category}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="imgUrl" className="block font-medium mb-1">
                            Gambar
                        </label>
                        <input id="imgUrl" name="imgUrl" type="file" accept="image/*" onChange={handleChange} className="input" />
                    </div>

                    <div className="flex gap-2">
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            {isEdit ? "Update" : "Tambah"}
                        </button>
                        <button type="button" onClick={() => setShowForm(false)} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
                            Batal
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default BookPageManagement;
