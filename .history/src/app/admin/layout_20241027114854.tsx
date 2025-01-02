/* src/app/admin/layout.tsx */

import React from 'react';
import AdminSidebar from './AdminSidebar';
import type { Metadata } from "next";
import { GetServerSideProps } from 'next';
import { verifyTokenForPage } from '@/utils/verifyToken';
import { cookies } from 'next/headers';

interface AdminDashboardLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is Dashboard",
};

const AdminDashboardLayout = ({ children }: AdminDashboardLayoutProps) => (
  <div className="overflow-height flex items-start justify-between overflow-hidden">
    <div className="sidebar overflow-height w-15 lg:w-1/5 bg-purple-600 text-white p-1 lg:p-5">
      <AdminSidebar />
    </div> 
    <div className="content overflow-height w-full lg:w-4/5 overflow-y-scroll">
      {children}  
    </div>
  </div>
);

// Server-side token verification with getServerSideProps
export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookieStore = cookies();
  const token = await cookieStore.get("jwtToken")?.value;

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const payload = verifyTokenForPage(token);
  if (!payload || payload.isAdmin === false) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default AdminDashboardLayout;
