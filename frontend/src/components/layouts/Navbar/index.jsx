import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const menuRef = useRef();
    const menuMboileRef = useRef();
    const [menuOpen, setMenuOpen] = useState(false);
    const isLogIn = !!localStorage.getItem("accessToken");

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && menuMboileRef.current && !menuMboileRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            };
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-white shadow-md  px-4 py-3  w-full">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-bold text-gray-800">
                    <Link to="/">Katalog Buku</Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center  text-gray-700 relative" ref={menuRef}>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="hover:text-black cursor-pointer">
                        <img src="/user.png" className="w-6 h-6 rounded-full inset-ring-amber-500" alt="profile" />
                    </button>

                    {/* dropdown */}
                    {menuOpen && (
                        <div className="absolute top-[110%] right-0 mt-2 w-36 bg-white rounded-md shadow-lg py-2 z-50 transform origin-top-right duration-500 ease-in-out">
                            <Link to="/" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Home
                            </Link>
                            {isLogIn && (
                                <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Dashboard
                                </Link>
                            )}

                            {!isLogIn && (
                                <Link to="/login" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                                    Login
                                </Link>
                            )}

                            {isLogIn && (
                                <Link to="/logout" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                                    Logout
                                </Link>
                            )}
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden relative" ref={menuMboileRef}>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none cursor-pointer">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden mt-4 space-y-2">
                    <Link to="/" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Home
                    </Link>
                    {isLogIn && (
                        <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Dashboard
                        </Link>
                    )}

                    {!isLogIn && (
                        <Link to="/login" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                            Login
                        </Link>
                    )}

                    {isLogIn && (
                        <Link to="/logout" onClick={() => setMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                            Logout
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
