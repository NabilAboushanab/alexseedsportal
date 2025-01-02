import ArticleItem from "@/components/articles/ArticleItem"; // Component for displaying individual articles
import Pagination from "@/components/articles/Pagination"; // Component for pagination control
import SearchArticleInput from "@/components/articles/SearchArticleInput"; // Component for the search input
import { Article } from "@prisma/client"; // Prisma type for Article
import type { Metadata } from "next"; // Type for Next.js metadata
import { getArticles } from "@/apiCalls/articleApiCall"; // Function to fetch articles from the API
import { ARTICLE_PER_PAGE } from "@/utils/constants"; // Constant for articles per page
import prisma from "@/utils/db"; // Prisma client instance for database operations

interface ArticlesPageProps {
  searchParams: { pageNumber: string }; // Page number from the search parameters
}

const ArticlesPage = async ({ searchParams }: ArticlesPageProps) => {
  const { pageNumber } = searchParams; // Extract pageNumber from searchParams
  const articles: Article[] = await getArticles(pageNumber); // Fetch articles
  const count: number = await prisma.article.count(); // Get total count of articles

  const pages = Math.ceil(count / ARTICLE_PER_PAGE); // Calculate total number of pages

  return (
    <section className="container m-auto px-5">
      <SearchArticleInput /> {/* Search input component */}
      <div className="flex items-center justify-center flex-wrap gap-7">
        {articles.map((item) => (
          <ArticleItem article={item} key={item.id} /> 
        ))}
      </div>
      <Pagination pageNumber={parseInt(pageNumber, 10)} route="/articles" pages={pages} /> {/* Pagination component */}
    </section>
  );
};

export default ArticlesPage;

export const metadata: Metadata = {
  title: "Article Page", // Page title
  description: "Articles about alex seeds", // Page description
};
