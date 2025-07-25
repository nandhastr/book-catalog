import React from "react";

const UserTable = ({ users, onEdit, onDelete }) => {
    return (
        <div className="p-4">
            <div className="overflow-x-auto">
                <table className="min-w-full border-b border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 border-b">No</th>
                            <th className="px-4 py-2 border-b">Nama</th>
                            <th className="px-4 py-2 border-b">Email</th>
                            <th className="px-4 py-2 border-b">Role</th>
                            <th className="px-4 py-2 border-b">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.length > 0 ? (
                            users.map((user, index) => (
                                <tr key={user.id} className="text-center">
                                    <td className="px-4 py-2 border-b">{index + 1}</td>
                                    <td className="px-4 py-2 border-b">{user.name}</td>
                                    <td className="px-4 py-2 border-b">{user.email}</td>
                                    <td className="px-4 py-2 border-b">{user.role}</td>
                                    <td className="px-4 py-2 border-b space-x-2">
                                        <button onClick={() => onEdit(user)} className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">
                                            Edit
                                        </button>
                                        <button onClick={() => onDelete(user.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-4">
                                    Tidak ada data pengguna.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserTable;
