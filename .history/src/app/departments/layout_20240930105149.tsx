import React from 'react'
import AdminSidebar from '../admin/AdminSidebar';

interface DepartmentsLayoutProps{
    children:React.ReactNode;
}
const DepartmentsLayout = ({children}:DepartmentsLayoutProps) => {
  return (
    <div>
       
        <div>
        {children}
        </div>
    </div>
  )
}

export default DepartmentsLayout