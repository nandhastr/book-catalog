import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/Auth/AuthForm.jsx";
import authService from "../../../service/authService.js";
import { APIEndpoint } from "../../../enum/APIendPoint.js";

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = async ({ email, password }) => {
        try {
            const res = await authService.login({ email, password });
            localStorage.setItem("accessToken", res.data.accessToken);
           localStorage.setItem("role", res.data.user.role);

            alert("Login berhasil!");
            navigate(APIEndpoint.DASHBOARD);
        } catch (error) {
            alert("Login gagal: " + (error.response?.data?.error || error.message));
        }
    };

    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center">
            <AuthForm title="Masuk" subtitle="Selamat Datang Kembali" buttonText="Masuk" isLogin={true} onSubmit={handleSubmit} />
        </div>
    );
};

export default Login;
