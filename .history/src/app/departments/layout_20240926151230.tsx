import React from "react" 
import AdminPage from "../admin/page";
interface DepartmentDashboardLayout{
children:React.ReactNode;
}

const DepartmentDashboardLayout = ({children}:DepartmentDashboardLayout) => {
  return (
    <div>
      <Admmin/>
    </div>
  )
}

export default DepartmentDashboardLayout