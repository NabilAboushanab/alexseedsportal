import React from 'react'
import AdminSidebar from '../admin/AdminSidebar';

interface DepartmentsLayoutProps{
    children:React.ReactNode;
}
const DepartmentsLayout = ({children}:DepartmentsLayoutProps) => {
  return (
    <div>
        <div>
        <AdminSidebar />
        </div>
        <dir>
        {children}
        </dir>
    </div>
  )
}

export default DepartmentsLayout