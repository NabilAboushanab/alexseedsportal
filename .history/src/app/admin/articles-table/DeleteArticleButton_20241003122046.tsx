"use client";
import axios from "axios"
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface DeleteArticleButtonProps{
    articleId:number;
}

const DeleteArticleButton = () => {
  return (
    <div>DeleteArticleButton</div>
  )
}

export default DeleteArticleButton