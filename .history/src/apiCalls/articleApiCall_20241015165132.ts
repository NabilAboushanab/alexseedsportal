import { Article } from "@prisma/client";
import { DOMAIN } from "@/utils/constants";
import { SingleArticle } from "@/utils/types";

// Generic fetch handler
async function fetchWrapper<T>(url: string): Promise<T> {
  const response = await fetch(url, { cache: 'no-store' });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch from ${url}`);
  }

  return response.json();
}

// Get articles based on pageNumber
export async function getArticles(pageNumber?: string | number): Promise<Article[]> {
  const url = `${DOMAIN}/api/articles?pageNumber=${pageNumber}`;
  return fetchWrapper<Article[]>(url);
}

// Get article count
export async function getArticlesCount(): Promise<number> {
  const url = `${DOMAIN}/api/articles/count`;
  const { count } = await fetchWrapper<{ count: number }>(url);
  return count;
}

// Get articles based on searchText
export async function getArticlesBasedOnSearch(searchText: string): Promise<Article[]> {
  const url = `${DOMAIN}/api/articles/search?searchText=${searchText}`;
  return fetchWrapper<Article[]>(url);
}

// Get single article by id
export async function getSingleArticle(articleId: string): Promise<SingleArticle> {
  const url = `${DOMAIN}/api/articles/${articleId}`;
  return fetchWrapper<SingleArticle>(url);
}
