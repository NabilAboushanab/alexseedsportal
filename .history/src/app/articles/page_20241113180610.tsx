import ArticleItem from "@/components/articles/ArticleItem";
import Pagination from "@/components/articles/Pagination";
//import SearchArticleInput from "./SearchArticleInput";
//import SearchArticleInput from "@/components/articles/SearchArticleInput";
import SearchArticleInput from "./SearchArticleInput";
import { Article } from "@prisma/client";
import type { Metadata } from "next";
import { getArticles } from "@/apiCalls/articleApiCall";
import {ARTICLE_PER_PAGE} from "@/utils/constants";
import prisma from '@/utils/db';


interface ArticlesPageProps{
  searchParams:{pageNumber:string}
}




export default ArticlesPage;

export const metadata: Metadata = {
  title: "Article Page",
  description: "Articles about alex seeds",
};