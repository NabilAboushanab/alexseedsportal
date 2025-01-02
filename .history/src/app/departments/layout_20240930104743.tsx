import React from 'react'

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