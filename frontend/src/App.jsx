import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import MainLayout from "./components/layouts/mainLayout";
import Home from "./pages/Home";
import Logout from "./pages/auth/Logout.jsx";
import ProtectedRoute from "../middleware/AuthMidlleware.jsx";
import DashboardAdminUser from "./pages/DashboardAdminUser/index.jsx";
import AdminLayout from "./components/layouts/adminLayout/index.jsx";
import BookTable from "./pages/BookPage/index.jsx";
import BookPage from "./pages/BookPage/index.jsx";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MainLayout>
                                <Home />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <MainLayout>
                                <Login />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <MainLayout>
                                <Register />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/logout"
                        element={
                            <ProtectedRoute>
                                <Logout />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/dashboard"
                        element={
                            <AdminLayout>
                                <DashboardAdminUser />
                            </AdminLayout>
                        }
                    />
                    <Route
                        path="/book-management"
                        element={
                            <AdminLayout>
                                <BookPage/>
                            </AdminLayout>
                        }
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
