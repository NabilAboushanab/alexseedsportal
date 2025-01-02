import { getSingleArticle } from '@/apiCalls/articleApiCall';
import { verifyTokenForPage } from '@/utils/verifyToken';
import { Article } from '@prisma/client';
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
    <section className='fix-height flex items-center justify-center px-5 lg:'>

    </section>
  )
}

export default EditArticlePage