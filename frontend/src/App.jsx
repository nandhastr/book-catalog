import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import MainLayout from "./components/layouts/mainLayout";
import Home from "./pages/Home";
import Logout from "./pages/auth/Logout.jsx";
import ProtectedRoute from "../middleware/AuthMidlleware.jsx";

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
                </Routes>
            </Router>
        </>
    );
}

export default App;
