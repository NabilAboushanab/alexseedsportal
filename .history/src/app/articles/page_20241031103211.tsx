import ArticleItem from "@/components/articles/ArticleItem";
import Pagination from "@/components/articles/Pagination";
import SearchArticleInput from "./SearchArticleInput";
import { Article } from "@prisma/client";
import type { Metadata } from "next";
import { getArticles } from "@/apiCalls/articleApiCall";
import { ARTICLE_PER_PAGE } from "@/utils/constants";
import prisma from '@/utils/db';

interface ArticlesPageProps {
  searchParams: { pageNumber: string }
}

const ArticlesPage = async ({ searchParams }: ArticlesPageProps) => {
  // الانتظار لجلب searchParams
  const params = await searchParams;
  const { pageNumber = "1" } = params; // تعيين رقم الصفحة الافتراضي إلى 1 إذا لم يكن موجودًا
  
  const articles: Article[] = await getArticles(pageNumber);
  const count: number = await prisma.article.count();
  const pages = Math.ceil(count / ARTICLE_PER_PAGE);
  
  return (
    <section className="container m-auto px-5">
      <SearchArticleInput />
      <div className="flex items-center justify-center flex-wrap gap-7">
        {articles.map(item => (
          <ArticleItem article={item} key={item.id} />
        ))}
      </div>
      <Pagination pageNumber={parseInt(pageNumber)} route="/articles" pages={pages} />
    </section>
  );
}

export default ArticlesPage;

export const metadata: Metadata = {
  title: "Article Page",
  description: "Articles about alex seeds",
};
