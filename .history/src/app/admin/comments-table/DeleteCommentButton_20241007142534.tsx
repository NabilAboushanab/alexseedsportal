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
       await axios.delete(`${DOMAIN}/api`) 
     } catch (error:any) {
      toast.error(error?.response?.data.message) ;
      console.log(error) ;
     }   
    }
  return (
    <div>DeleteCommentButton</div>
  )
}

export default DeleteCommentButton