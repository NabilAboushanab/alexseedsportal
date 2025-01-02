import { verifyTokenForPage } from '@/utils/verifyToken';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface EditArticlePageProps{
    params:{id:st }
}

const EditArticlePage = () => {
    const token = cookies().get("jwtToken")?.value;
    if (!token) redirect("/");
  
    const payload = verifyTokenForPage(token);
    if (payload?.isAdmin === false) redirect("/");
  return (
    <div>EditArticlePage</div>
  )
}

export default EditArticlePage