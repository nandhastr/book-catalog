import React, { useEffect, useState } from "react";
import useCategoryStore from "./../../store/categoryStore";
import CategoryTable from "./../../components/categoryTableManagement";

const CategoryPageManagement = () => {
    const { categories, fetchCategories, createCategory, updateCategory, deleteCategory } = useCategoryStore();

    const [showForm, setShowForm] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);
    const [nameCategory, setNameCategory] = useState("");

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    const handleAdd = () => {
        setNameCategory("");
        setIsEdit(false);
        setEditId(null);
        setShowForm(true);
    };

    const handleEdit = (category) => {
        setNameCategory(category.name_category);
        setIsEdit(true);
        setEditId(category.id);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        if (confirm("Yakin ingin menghapus kategori ini?")) {
            await deleteCategory(id);
            fetchCategories();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!nameCategory.trim()) return;

        const data = { name_category: nameCategory };
        if (isEdit) {
            await updateCategory(editId, data);
        } else {
            await createCategory(data);
        }

        fetchCategories();
        setShowForm(false);
        setNameCategory("");
        setIsEdit(false);
        setEditId(null);
    };

    return (
        <div className="p-6">
            <CategoryTable categories={categories} onAdd={handleAdd} onEdit={handleEdit} onDelete={handleDelete} />

            {showForm && (
                <form onSubmit={handleSubmit} className="mt-6 p-4 bg-gray-100 rounded-md shadow-md max-w-md mx-auto">
                    <h2 className="text-lg font-bold mb-4">{isEdit ? "Edit Kategori" : "Tambah Kategori"}</h2>
                    <div className="mb-4">
                        <label htmlFor="nameCategory" className="block font-medium mb-1">
                            Nama Kategori
                        </label>
                        <input id="nameCategory" type="text" value={nameCategory} onChange={(e) => setNameCategory(e.target.value)} className="input" required />
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

export default CategoryPageManagement;
