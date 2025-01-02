"use client"; // توضيح أن هذا الكود سيعمل في العميل
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { DOMAIN } from '@/utils/constants';
import ButtonSpinner from '@/components/ButtonSpinner';

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
      const response = await axios.post(`${DOMAIN}/api/users/login`, { username, password });
      toast.success(response.data.message);  // عرض رسالة النجاح
      router.replace('/');
      setLoading(false);
      router.refresh();
    } catch (error: any) {
      toast.error(error?.response?.data.message || 'خطأ في تسجيل الدخول');
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col">
      <input
        className="mb-4 border rounded p-2 text-xl"
        type="text"
        placeholder="أدخل اسم المستخدم"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="mb-4 border rounded p-2 text-xl"
        type="password"
        placeholder="أدخل كلمة المرور"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={loading} type="submit" className="text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold">
        {loading ? <ButtonSpinner /> : "تسجيل الدخول"}
      </button>
    </form>
  );
};

export default LoginForm;
