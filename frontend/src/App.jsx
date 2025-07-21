import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import MainLayout from "./components/layouts/mainLayout";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Router>
          <Routes>
            <Route path="/" element={<MainLayout><Home/></MainLayout>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
