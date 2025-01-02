import React from 'react'

interface DepartmentsLayoutProps{
    children:React.ReactNode;
}
const DepartmentsLayout = ({children}:DepartmentsLayoutProps) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default DepartmentsLayout