import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/Auth/AuthForm.jsx";
import authService from "../../../service/authService.js";
import { APIEndpoint } from "../../../enum/APIendPoint.js";

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = async ({name, email, password, role }) => {
        try {
            await authService.register({ name, email, password, role });
            alert("Registrasi berhasil!");
            navigate("/login");
        } catch (error) {
            alert("Registrasi gagal: " + (error.response?.data?.error || error.message));
        }
    };


    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center ">
            <AuthForm
                title="Daftar"
                subtitle="Silahkan Daftar Akun Untuk Melanjutkan"
                buttonText="Daftar"
                isLogin={false}
                onSubmit={handleSubmit} />
        </div>
    );
};

export default Register;
