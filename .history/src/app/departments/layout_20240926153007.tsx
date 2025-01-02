import React from "react" 
import AdminPage from "../admin/page";
import AdminSidebar from "../admin/AdminSidebar";
interface DepartmentDashboardLayout{
children:React.ReactNode;
}

const DepartmentDashboardLayout = ({children}:DepartmentDashboardLayout) => {
  return (
    <div className="overflow-hight w-15 lg:w-1/5 bg-purple-600 text-white p-1">
    {children}
    
    </div>
  )
}

export default DepartmentDashboardLayout