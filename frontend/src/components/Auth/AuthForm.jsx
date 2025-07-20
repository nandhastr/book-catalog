import React, { useState } from 'react'
import LabelInput from '../common/Label';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const AuthForm = ({ title, subtitle, buttonText, isLogin }) => {
    // const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            alert("Harap isi email");
            return;
        }
        if (!password) {
            alert("Harap isi password");
            return;
        }

        if (isLogin) {
            // loginUser();
        } else {
            if (password !== confirmPassword) {
                alert("Kata sandi dan konfirmasi kata sandi tidak cocok!");
                return;
            }
        }
    };
    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white rounded-xl shadow-md px-8 py-10 w-full max-w-md">
                    <div className="flex flex-col gap-4 text-center mb-6">
                        <h1 className="text-3xl font-bold">Katalog Buku</h1>
                        <h2 className="text-gray-800 font-semibold text-2xl">{title}</h2>
                        <p className="text-gray-600 text-sm">{subtitle}</p>
                    </div>

                    <form className="space-y-4" onSubmit={handleFormSubmit}>
                        <div>
                            <LabelInput htmlFor="email" label="Email" />
                            <input type="text" placeholder="Masukkan email" className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-500 transition duration-200" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div>
                            <LabelInput htmlFor="password" label="Password" />
                            <input type="password" placeholder="Masukkan kata sandi" className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-500 transition duration-200" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        {!isLogin && (
                            <div>
                                <LabelInput htmlFor="confirm-password" label="Konfirmasi Kata Sandi" />
                                <input
                                    type="password"
                                    id="confirm-password"
                                    placeholder="Masukkan ulang kata sandi"
                                    className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-500 transition duration-200"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        )}

                        <div className="text-sm text-right">
                            {isLogin ? (
                                <Link to="/register" className="text-blue-600 hover:underline">
                                    Belum punya akun?
                                </Link>
                            ) : (
                                <Link to="/login" className="text-blue-600 hover:underline">
                                    Sudah punya akun?
                                </Link>
                            )}
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition">
                            {buttonText}
                        </button>

                        <div className="text-center text-gray-400 text-sm">atau</div>

                        <button type="button" className="w-full flex items-center justify-center border border-gray-300 rounded py-2 hover:bg-gray-100 transition">
                            <img src="/googleLogo.png" alt="Google" className="w-5 h-5 mr-2" />
                            {title} dengan Google
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AuthForm;
