import React from "react" 
import AdminPage from "../admin/page";
import AdminSidebar from "../admin/AdminSidebar";
interface DepartmentDashboardLayout{
children:React.ReactNode;
}

const DepartmentDashboardLayout = ({children}:DepartmentDashboardLayout) => {
  return (
    <div className="overflow-hight w-15 lg">
    {children}
    
    </div>
  )
}

export default DepartmentDashboardLayout