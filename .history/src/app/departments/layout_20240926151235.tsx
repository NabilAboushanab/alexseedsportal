import React from "react" 
import AdminPage from "../admin/page";
interface DepartmentDashboardLayout{
children:React.ReactNode;
}

const DepartmentDashboardLayout = ({children}:DepartmentDashboardLayout) => {
  return (
    <div>
      <Admin/>
    </div>
  )
}

export default DepartmentDashboardLayout