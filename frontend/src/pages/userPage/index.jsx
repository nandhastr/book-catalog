import React, { useEffect, useState } from "react";
import useUserStore from "./../../store/userStore";
import UserTable from "../../components/userTabelManagement";

const UserPageManagement = () => {
    const { users, fetchUsers, createUser, updateUser, deleteUser } = useUserStore();

    const [showForm, setShowForm] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const handleEdit = (user) => {
        setName(user.name);
        setEmail(user.email);
        setPassword("");
        setRole(user.role);
        setIsEdit(true);
        setEditId(user.id);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        if (confirm("Yakin ingin menghapus user ini?")) {
            await deleteUser(id);
            fetchUsers();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !role) return;

        const data = { name, email, role };
        if (!isEdit) {
            data.password = password;
        } else if (password) {
            data.password = password;
        }

        if (isEdit) {
            await updateUser(editId, data);
        } else {
            await createUser(data);
        }

        fetchUsers();
        setShowForm(false);
        setName("");
        setEmail("");
        setPassword("");
        setRole("");
        setIsEdit(false);
        setEditId(null);
    };

    return (
        <div className="p-6">
            <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />

            {showForm && (
                <form onSubmit={handleSubmit} className="mt-6 p-4 bg-gray-100 rounded-md shadow-md max-w-md mx-auto">
                    <h2 className="text-lg font-bold mb-4">{isEdit ? "Edit User" : "Tambah User"}</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-medium mb-1">
                            Nama
                        </label>
                        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="input" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium mb-1">
                            Email
                        </label>
                        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium mb-1">
                            {isEdit ? "Password Baru (opsional)" : "Password"}
                        </label>
                        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" required={!isEdit} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="role" className="block font-medium mb-1">
                            Role
                        </label>
                        <select id="role" value={role} onChange={(e) => setRole(e.target.value)} className="input" required>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
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

export default UserPageManagement;
