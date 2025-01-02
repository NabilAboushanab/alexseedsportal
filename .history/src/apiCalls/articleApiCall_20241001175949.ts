import { Article } from "@prisma/client";
import { DOMAIN } from "@/utils/constants";
import { SingleArticle } from "@/utils/types";

// Helper function to handle fetch requests
async function fetchFromApi<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch from ${url}`);
    }
    return response.json() as Promise<T>;
}

// Get articles based on pageNumber
export async function getArticles(pageNumber: string | undefined): Promise<Article[]> {
    const url = new URL(`${DOMAIN}/api/articles`);
    url.searchParams.append('pageNumber', pageNumber || '1'); // Default to 1 if pageNumber is undefined
    return fetchFromApi<Article[]>(url.toString());
}

// Get article count
export async function getArticlesCount(): Promise<number> {
    const url = `${DOMAIN}/api/articles/count`;
    const { count } = await fetchFromApi<{ count: number }>(url);
    return count;
}

// Get articles based on searchText
export async function getArticlesBasedOnSearch(searchText: string): Promise<Article[]> {
    const url = new URL(`${DOMAIN}/api/articles/search`);
    url.searchParams.append('searchText', searchText);
    return fetchFromApi<Article[]>(url.toString());
}

// Get single article by id
export async function getSingleArticle(articleId: string): Promise<SingleArticle> {
    const url = `${DOMAIN}/api/articles/${articleId}`;
    const response = await fetch(url, {
        cache: 'no-store'
    });
    return fetchFromApi<SingleArticle>(url);
}
