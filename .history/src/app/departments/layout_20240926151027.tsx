import React from "react" 
interface DepartmentDashboardLayout{
children:React.ReactNode;
}

const DepartmentDashboardLayout = ({children}:DepartmentDashboardLayout) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default DepartmentDashboardLayout