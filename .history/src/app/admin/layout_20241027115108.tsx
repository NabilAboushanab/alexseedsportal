import React from 'react';
import AdminSidebar from './AdminSidebar';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyTokenForPage } from '@/utils/verifyToken';

interface AdminDashboardLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is Dashboard",
};

// تحويل الدالة إلى async ومعالجة الكوكيز بشكل صحيح
const AdminDashboardLayout = async ({ children }: AdminDashboardLayoutProps) => {
  const cookieJar = await cookies(); // انتظر حتى يتم الحصول على الكوكيز
  const token = cookieJar.get("jwtToken")?.value; // الآن استخدم get على cookieJar

  if (!token) redirect("/");

  const payload = verifyTokenForPage(token);
  if (payload?.isAdmin === false) redirect("/");

  return (
    <div className="overflow-height flex items-start justify-between overflow-hidden">
      <div className="overflow-height w-15 lg:w-1/5 bg-purple-600 text-white p-1 lg:p-5">
        <AdminSidebar />
      </div>
      <div className="overflow-height w-full lg:w-4/5 overflow-y-scroll">
        {children}
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
