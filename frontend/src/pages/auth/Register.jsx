import React from "react";
import AuthForm from "../../components/Auth/AuthForm.jsx";

const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="min-h-screen bg-cover bg-center flex items-center justify-center ">
                <AuthForm title="Daftar" subtitle="Silahkan Daftar Akun Untuk Melanjutkan" buttonText="Daftar" isLogin={false} onSubmit={handleSubmit} />
            </div>
        </>
    );
};

export default Register;
