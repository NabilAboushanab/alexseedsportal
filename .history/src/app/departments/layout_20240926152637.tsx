import React from "react" 
import AdminPage from "../admin/page";
import AdminSidebar from "../admin/AdminSidebar";
interface DepartmentDashboardLayout{
children:React.ReactNode;
}

const DepartmentDashboardLayout = ({children}:DepartmentDashboardLayout) => {
  return (
    <div c>
    {children}
    <div>
      
    </div>
    </div>
  )
}

export default DepartmentDashboardLayout