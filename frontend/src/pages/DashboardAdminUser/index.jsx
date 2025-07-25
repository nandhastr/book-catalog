import React from "react";

const DashboardAdminUser = () => {
    const role = localStorage.getItem("role");
    return (
        <div>
            <h1>Selamat datang di dashboard {role === "admin" ? `Admin` : `User`}</h1>
        </div>
    );
};

export default DashboardAdminUser;
