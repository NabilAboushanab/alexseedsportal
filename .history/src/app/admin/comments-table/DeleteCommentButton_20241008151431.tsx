"use client"
import { DOMAIN } from "@/utils/constants";
import axios from "axios"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify";

interface DeleteCommentButtonProps{
    commentId:number;
}

const DeleteCommentButton = ({commentId}:DeleteCommentButtonProps) => {
    const router = useRouter();
    const deleteCommentHandler=async()=>{
     try {
       await axios.delete(`${DOMAIN}/api/comments/${commentId}`) 
       router.refresh();
       toast.success("comment deleted")
     } catch (error:any) {
      toast.error(error?.response?.data.message) ;
      console.log(error) ;
     }   
    }
  return (
    <div
    onClick={}>
    Delete
    </div>
  )
}

export default DeleteCommentButton