import React from "react";

const CategoryTable = ({ categories, onAdd, onEdit, onDelete }) => {
    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Daftar Kategori</h2>
                <button onClick={onAdd} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    + Tambah Kategori
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full border-b border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 border-b">No</th>
                            <th className="px-4 py-2 border-b">Nama Kategori</th>
                            <th className="px-4 py-2 border-b">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories?.length > 0 ? (
                            categories.map((category, index) => (
                                <tr key={category.id} className="text-center">
                                    <td className="px-4 py-2 border-b">{index + 1}</td>
                                    <td className="px-4 py-2 border-b">{category.name_category}</td>
                                    <td className="px-4 py-2 border-b space-x-2">
                                        <button onClick={() => onEdit(category)} className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
                                            Edit
                                        </button>
                                        <button onClick={() => onDelete(category.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center py-4">
                                    Tidak ada data kategori.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoryTable;
