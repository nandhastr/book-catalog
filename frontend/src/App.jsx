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
import BookPageManagement from "./pages/bookPage/index.jsx";
import CategoryPageManagement from "./pages/categoryPage/index.jsx";
import UserPageManagement from "./pages/userPage/index.jsx";

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
                                <ProtectedRoute>
                                    <DashboardAdminUser />
                                </ProtectedRoute>
                            </AdminLayout>
                        }
                    />
                    <Route
                        path="/book-management"
                        element={
                            <AdminLayout>
                                <ProtectedRoute>
                                    <BookPageManagement />
                                </ProtectedRoute>
                            </AdminLayout>
                        }
                    />
                    <Route
                        path="/category-management"
                        element={
                            <AdminLayout>
                                <ProtectedRoute>
                                    <CategoryPageManagement />
                                </ProtectedRoute>
                            </AdminLayout>
                        }
                    />
                    <Route
                        path="/user-management"
                        element={
                            <AdminLayout>
                                <ProtectedRoute>
                                    <UserPageManagement />
                                </ProtectedRoute>
                            </AdminLayout>
                        }
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
