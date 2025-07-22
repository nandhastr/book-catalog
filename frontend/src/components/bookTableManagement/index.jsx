import React from "react";

const BookTable = ({ books, onAdd, onEdit, onDelete }) => {
    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Daftar Buku</h2>
                <button onClick={onAdd} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    + Tambah Buku
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full border-b border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 border-b">No</th>
                            <th className="px-4 py-2 border-b">Judul</th>
                            <th className="px-4 py-2 border-b">Penulis</th>
                            <th className="px-4 py-2 border-b">Deskripsi</th>
                            <th className="px-4 py-2 border-b">Tahun</th>
                            <th className="px-4 py-2 border-b">Kategori</th>
                            <th className="px-4 py-2 border-b">Gambar</th>
                            <th className="px-4 py-2 border-b">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books?.length > 0 ? (
                            books.map((book, index) => (
                                <tr key={book.id} className="text-center">
                                    <td className="px-4 py-2 border-b">{index + 1}</td>
                                    <td className="px-4 py-2 border-b">{book.title}</td>
                                    <td className="px-4 py-2 border-b">{book.author}</td>
                                    <td className="px-4 py-2 border-b">{book.description}</td>
                                    <td className="px-4 py-2 border-b">{book.year}</td>
                                    <td className="px-4 py-2 border-b">{book.category?.name_category}</td>
                                    <td className="px-4 py-2 border-b">
                                        <img src={`http://localhost:3000/api/img/${book.imgUrl}`} alt={book.title} className="w-12 h-12 object-cover mx-auto" />
                                    </td>
                                    <td className="px-4 py-2 border-b space-x-2">
                                        <button onClick={() => onEdit(book)} className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
                                            Edit
                                        </button>
                                        <button onClick={() => onDelete(book.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center py-4">
                                    Tidak ada data buku.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookTable;
