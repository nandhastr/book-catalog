import { FaTachometerAlt, FaUser, FaBook, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const role = localStorage.getItem("role");

    return (
        <aside className="bg-blue-600 text-white w-64 p-4  ">
            <div className="mb-6">
                <h2 className="text-2xl font-bold">{role === "admin" ? "Admin Panel" : "User Panel"}</h2>
            </div>

            <nav>
                <ul className="space-y-3">
                    <li>
                        <Link to="/dashboard" className="flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded">
                            <FaTachometerAlt />
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    {role === "admin" && (
                        <>
                            <li>
                                <Link to="/user-management" className="flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded">
                                    <FaUser />
                                    <span>Manajemen User</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/book-management" className="flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded">
                                    <FaBook />
                                    <span>Manajemen Buku</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/category-management" className="flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded">
                                    <FaBook />
                                    <span>Manajemen Kategori</span>
                                </Link>
                            </li>
                        </>
                    )}

                    <li>
                        <Link to="/logout" className="flex items-center space-x-2 hover:bg-red-600 px-3 py-2 rounded">
                            <FaSignOutAlt />
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
