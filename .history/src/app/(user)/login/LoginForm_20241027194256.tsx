"use client";
import React ,{useState} from 'react';
import { toast } from 'react-toastify';
import {useRouter} from 'next/navigation';
import axios from 'axios';
import { DOMAIN } from '@/utils/constants';
import ButtonSpinner from '@/components/ButtonSpinner';



const LoginForm = () => {
  const router = useRouter();
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [loading,setLoading]=useState(false);
    
    const formSubmitHandler= async(e:React.FormEvent) =>{
     e.preventDefault();  
     if (username === "") return toast.error("username is required");
     if (password === "") return toast.error("Password is required");

     try {
      setLoading(true);
      await axios.post(`${DOMAIN}/api/users/login`,{username,password});
      router.replace('/');
      setLoading(false);
      router.refresh();
     } catch (error:any) {
      toast.error(error?.response?.data.message);
      console.log(error);
      setLoading(false);
     } 
    }
  return (
    <form  onSubmit={formSubmitHandler} className="flex flex-col">
 <input
  className="mb-4 border rounded p-2 text-xl"
   type="text"
    placeholder="Enter your User "   
    value={username}
  onChange={(e)=> setUsername(e.target.value)}   
   />
 <input
  className="mb-4 border rounded p-2 text-xl"
   type="password" 
   placeholder="Enter Password"
   value={password}
   onChange={(e)=> setPassword(e.target.value)} 
   />  
<button disabled={loading} type="submit" className="text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold">
  {loading ? <ButtonSpinner/>:"Login"} 
</button>
</form>
  )
}

export default LoginForm