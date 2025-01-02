"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
//import axios from "axios";
import axiosInstance from '@/utils/axiosConfig';
import { DOMAIN } from "@/utils/constants";
import ButtonSpinner from "@/components/ButtonSpinner";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();  
    if (username === "") return toast.error("اسم المستخدم مطلوب");
    if (password === "") return toast.error("كلمة المرور مطلوبة");

    try {
      setLoading(true);
      await axiosInstance.post(`${DOMAIN}/api/users/login`, { username, password });
      
      router.replace("/departments"); // التوجيه إلى صفحة Filled Oil
      router.refresh(); // تحديث الصفحة لجعل التغييرات تظهر فورًا
      toast.success("تم تسجيل الدخول بنجاح!");
     
      setLoading(false);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "حدث خطأ أثناء تسجيل الدخول");
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col">
      <input
        className="mb-4 border rounded p-2 text-xl text-right"
        type="text" 
        placeholder="أدخل اسم المستخدم"
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input
        className="mb-4 border rounded p-2 text-xl text-right"
        type="password" 
        placeholder="أدخل كلمة المرور"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />  
      <button
        disabled={loading}
        type="submit"
        className="text-2xl text-white bg-blue-600 p-2 rounded-lg font-bold"
      >
        {loading ? <ButtonSpinner /> : "دخول"} 
      </button>
      <Link
        href="/register"
        className="text-2xl text-center text-blue-600 p-2 rounded-lg font-bold underline"
        aria-label="Register"
      >
        تسجيل مستخدم جديد
      </Link>
    </form>
  );
};

export default LoginForm;
