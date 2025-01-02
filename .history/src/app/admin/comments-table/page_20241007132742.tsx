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
      <thead className='border-t-2 border-b-2 border-gray-500 text-xl'>
<tr>
  <th className='p-2'>Comment</th>
  <th className='hidden  lg:inline-block p-3'>Created At</th>
  <th>Actions</th>

</tr>
      </thead>
<tbody>
  {comments.map(comment=>(
    <tr نثغ></tr>
  ))}
</tbody>
    </table>
   </section>
  )
}

export default AdminCommentsTable