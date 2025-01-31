import { cookies } from 'next/headers';
import { redirect } from 'next/navigation'; 
import { verifyToken, verifyTokenForPage } from '@/utils/verifyToken';
import { Comment } from '@prisma/client';

const AdminCommentsTable = () => {
  const token =cookies().get("jwtToken")?.value;
  // إعادة توجيه إلى الصفحة الرئيسية إذا لم يكن هناك توكن
  if(!token) redirect("/");

  const payload=verifyTokenForPage(token);
  if(payload?.isAdmin===false)redirect("/");

  const comments :Comment[]=[];
  return (
   <section>
    <h1 className='mb-7 text-2xl font-semibold text-gray-700'>Comments</h1>
    <table className='table w-full text-left'>
      <thead className='border-t-2'>

      </thead>

    </table>
   </section>
  )
}

export default AdminCommentsTable