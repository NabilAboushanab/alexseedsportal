import React from 'react'
import AddArticleForm from './AddArticleForm';
import { redirect } from 'next/navigation'; 
import { verifyToken, verifyTokenForPage } from '@/utils/verifyToken';
import { cookies } from 'next/headers';

const AdminPage = () => {
  const token =cookies().get("jwtToken")?.value;
  // إعادة توجيه إلى الصفحة الرئيسية إذا لم يكن هناك توكن
  if(!token) redirect("/");

  const payload=verifyTokenForPage(token);
  if(payload?.isAdmin===false)redirect("")
  return (
    <div className='fix-height flex items-center justify-center px-5 lg:px-20'>
<div className='shadow p-4 bg-purple-200 rounded w-full'>
<h2 className='text-xl lg:text-2xl text-gray-700 font-semibold mb-4'>
Add New Article
</h2>
<AddArticleForm />
</div>
    </div>
  )
}

export default AdminPage