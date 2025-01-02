import { DOMAIN } from "@/utils/constants";
import { Comment } from "@prisma/client";
export async function getAllComments(token:string):Promise<Comment[]>{
    const response=await fetch(`${DOMAIN}/api/comments`,{
        headers:{
          cookie:`jwtToken=${token}`
        }
      });
      if(!response.ok){
        throw new Error("Filled to fetch comments");
      }
      RE response.json();  
}