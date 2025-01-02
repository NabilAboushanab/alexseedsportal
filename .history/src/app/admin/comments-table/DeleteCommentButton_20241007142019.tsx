"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify";

interface DeleteCommentButtonProps{
    commentId:number;
}

const DeleteCommentButton = ({commentId}:DeleteCommentButtonProps) => {
    
  return (
    <div>DeleteCommentButton</div>
  )
}

export default DeleteCommentButton