import { Article } from "@prisma/client";
import { DOMAIN } from "@/utils/constants";
import { SingleArticle } from "@/utils/types";

// get articles based on pageNumber
export async function getArticles(pageNumber: string | undefined): Promise<Article[]> {
  const response = await fetch(`${DOMAIN}/api/articles?pageNumber=${pageNumber}`);

  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  return response.json();
}

// get article count
export async function getArticlesCount(): Promise<number> {
  const response = await fetch(`${DOMAIN}/api/articles/count`);

  if (!response.ok) {
    throw new Error("Failed to fetch articles count");
  }

  const { count } = (await response.json()) as { count: number };
  return count;
}

// get articles based on searchText
export async function getArticlesBasedOnSearch(searchText: string): Promise<Article[]> {
  const response = await fetch(`${DOMAIN}/api/articles/search?searchText=${searchText}`);

  if (!response.ok) {
    throw new Error("Failed to fetch articles based on search text");
  }

  return response.json();
}

// get single article by id
// get single article by id
export async function getSingleArticle(articleId: string): Promise<SingleArticle> {
  const response = await fetch(`${DOMAIN}/api/articles/${articleId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    const errorDetails = await response.text(); // Get the response text for debugging
    throw new Error(`Failed to fetch the article: ${response.status} ${response.statusText} - ${errorDetails}`);
  }

  return response.json();
}


