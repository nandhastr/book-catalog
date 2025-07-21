import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../../service/authService.js";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const doLogout = async () => {
            try {
                const token = localStorage.getItem("accessToken");
                if (!token) {
                    navigate("/login");
                    return;
                }

                await authService.logoutAPI();
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken"); 
                navigate("/");
            } catch (error) {
                console.error("Logout error:", error.response?.data || error.message);
                navigate("/");
            }
        };

        doLogout();
    }, [navigate]);

    return null; 
};

export default Logout;
