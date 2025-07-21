import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const AdminLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-[100vh] bg-gray-50">
           
            <Navbar />

          
            <div className="flex flex-1 ">
              
                <Sidebar />

            
                <main className="flex-1 p-6">{children}</main>
            </div>

       
        </div>
    );
};

export default AdminLayout;
