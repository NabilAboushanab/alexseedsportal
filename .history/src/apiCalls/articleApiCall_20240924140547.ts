import { DOMAIN } from "@/utils/constants";
import { SingleArticle } from "@/utils/types";
import { Article } from "@prisma/client";



//get article based on pageNumber
export async function getArticles(pageNumber:string | undefined):Promise<Article[]>{
    const response =await fetch(`http://localhost:3000/api/articles?pageNumber=${pageNumber}`);
  
    if(!response.ok){
  throw new Error("Failed to fetch articles");
    }
    return response.json(); 
  }

  //get article count
export async function getArticlesCount():Promise<Number>{
    const response =await fetch(`http://localhost:3000/api/articles/count`);
  
    if(!response.ok){
  throw new Error("Failed to gets articles count");
    }
 const{count}=await response.json() as {count:number}; 
 return count
  }

  //get article based on searchText
export async function getArticlesBasedOnSearch(searchText:string):Promise<Article[]>{
  const response =await fetch(`http://localhost:3000/api/articles/search?seachText=${searchText}`);

  if(!response.ok){
throw new Error("Failed to fetch articles");
  }
  return response.json(); 
}

  //get article based on article by id 
  export async function getSingleArticle(articleId:string):Promise<SingleArticle>{
    const response =await fetch(`${DOMAIN}/api/articles/${articleId}`,{
     cache:'no-store' 
    });
  
    if(!response.ok){
  throw new Error("Failed to fetch article");
    }
    return response.json(); 
  }