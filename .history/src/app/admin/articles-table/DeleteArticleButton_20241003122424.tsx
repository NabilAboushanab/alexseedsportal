"use client";
import axios from "axios"
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface DeleteArticleButtonProps{
    articleId:number;
}

const DeleteArticleButton = ({articleId}:DeleteArticleButtonProps) => {
    const router =useRouter();

    const deleteArticleHandler=async()=>{
       try {
        if(confirm("you want delete this article"))
       } catch (error) {
        
       } 
    }

  return (
    <div>DeleteArticleButton</div>
  )
}

export default DeleteArticleButton