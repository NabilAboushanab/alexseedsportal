import { Article } from "@prisma/client";
import { DOMAIN } from "@/utils/constants";
import { SingleArticle } from "@/utils/types";




//get article based on pageNumber
export async function getArticles(pageNumber:string | undefined):Promise<Article[]>{
    const response =await fetch(
      `${DOMAIN}/api/articles?pageNumber=${pageNumber}`,{cache:'no-store'});
    if(!response.ok){
  throw new Error("Failed to fetch articles");
    }
    return response.json(); 
  }

  //get article count
export async function getArticlesCount():Promise<Number>{
    const response =await fetch(`${DOMAIN}/api/articles/count`,{cache:'no-store'});
  
    if(!response.ok){
  throw new Error("Failed to gets articles count");
    }
 const{count}=await response.json() as {count:number}; 
 return count
  }

  //get article based on searchText
export async function getArticlesBasedOnSearch(searchText:string):Promise<Article[]>{
  const response =await fetch(`${DOMAIN}/api/articles/search?searchText=${searchText}`);

  if(!response.ok){
throw new Error("Failed to fetch articles");
  }
  return response.json(); 
}

 ;
  
 