import React from 'react'

import type { Metadata } from "next";
import DepartmentsSidebar from './DepartmenstSidebar';
import 

interface DepartmentsLayoutProps{
    children:React.ReactNode;
}

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is Dashboard",
};

const DepartmentsLayoutLayout = ({children}:DepartmentsLayoutProps) => {
  return (
    <div className="overflow-height flex items-start justify-between overflow-hidden">
       <div className="overflow-height w-15 lg:w-1/5 bg-purple-600 text-white p-1 lg:p-5">
       <DepartmentsSidebar>
        </div> 
        <div className="overflow-height w-full lg:w-4/5 overflow-y-scroll">
            {children}  
        </div>
    </div>
  )
}

export default DepartmentsLayoutLayout