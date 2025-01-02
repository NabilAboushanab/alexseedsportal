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
if
     } catch (error:any) {
      toast.error(error?.response?.data.message) ;
      console.log(error) ;
     }   
    }
  return (
    <div
    onClick={deleteCommentHandler}
    className="bg-red-600 text-white rounded-lg inline-block py-1 px-2 cursor-pointer hover:bg-red-800 transition"
    >
    Delete
    </div>
  )
}

export default DeleteCommentButton