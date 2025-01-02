import { verifyTokenForPage } from '@/utils/verifyToken';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface EditArticlePageProps{
    params:{id:string };

}

const EditArticlePage =  async({params}:EditArticlePageProps) => {
    const token = cookies().get("jwtToken")?.value;
    if (!token) redirect("/");
  
    const payload = verifyTokenForPage(token);
    if (payload?.isAdmin === false) redirect("/");

    const article:Article=await getSingleArticle(params.id);
  return (
    <div>EditArticlePage</div>
  )
}

export default EditArticlePage