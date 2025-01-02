import React from "react" 
import AdminPage from "../admin/page";
import AdminSidebar from "../admin/AdminSidebar";
interface DepartmentDashboardLayout{
children:React.ReactNode;
}

const DepartmentDashboardLayout = ({children}:DepartmentDashboardLayout) => {
  return (
    <div>
    <div>
      <AdminSidebar/>
    </div>
    <div>
      
    </div>
    </div>
  )
}

export default DepartmentDashboardLayout