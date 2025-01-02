"use client";
import React ,{useState} from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { DOMAIN } from '@/utils/constants';
import { useRouter } from 'next/navigation';
import { articles } from '@/utils/data';
import { Article } from '@prisma/client';

interface EditArticleFormProps{
    article: Article
}

const EditArticleForm = ({}:E) => {
    const router =useRouter();
    const [title,setTitle]=useState(article.title);
    const [description,setDescription]=useState("");
    
    const formSubmitHandler= async(e:React.FormEvent) =>{
     e.preventDefault();  
     if (title === "") return toast.error("Title is required");
     if (description === "") return toast.error("Description is required");
      
     try {
      await axios.post(`${DOMAIN}/api/articles`,{title,description});
      setTitle("");
      setDescription("");
      toast.success("New article added");
      router.refresh();
     } catch (error:any) {
      toast.error(error?.response?.data.message);
      console.log(error);
     }
    }
  return (
    <form  onSubmit={formSubmitHandler} className="flex flex-col">
 <input
  className="mb-4 border rounded p-2 text-xl"
   type="text"
    placeholder="Enter Article Title"   
    value={title}
  onChange={(e)=> setTitle(e.target.value)}   
   />
<textarea 
className='mb-4 p-1 lg:text-xl rounded resize-none'
rows={5}
placeholder='Enter Articles Description  '
value={description}
onChange={(e)=> setDescription(e.target.value)}

></textarea>

<button type="submit" className="text-2xl text-white bg-blue-800  hover:bg-blue-900 p-2 rounded-lg font-bold">
   Add 
</button>
</form>
  )
}

export default EditArticleForm