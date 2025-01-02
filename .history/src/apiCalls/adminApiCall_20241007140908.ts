import { Comment } from "@prisma/client";
export async function getAllComments(token:string):Promise<Comment[]