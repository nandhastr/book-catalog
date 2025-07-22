import React from 'react'

const DashboardAdminUser = () => {
  const role = localStorage.getItem("role");
  return (
    <div>
      <h1>
          {role === "admin" ?` Dashboard Admin` : `Dashboard User`}
          
       </h1>
      </div>
  );
}

export default DashboardAdminUser;
