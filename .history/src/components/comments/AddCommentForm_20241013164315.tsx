"use client";
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { DOMAIN } from '@/utils/constants';

interface AddCommentFormProps {
  articleId: number;
}

const AddCommentForm = ({ articleId }: AddCommentFormProps) => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // لإدارة حالة الإرسال

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (text === "") {
      return toast.error("يرجى كتابة شيء");
    }

    setIsSubmitting(true); // تعيين الحالة إلى "الإرسال قيد التنفيذ"

    try {
      await axios.post(`${DOMAIN}/api/comments`, { text, articleId });
      router.refresh(); // تحديث الصفحة بعد إرسال التعليق
      setText(""); // إعادة تعيين الحقل بعد الإرسال
      toast.success("تم إضافة التعليق بنجاح!");
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data?.message || "حدث خطأ ما!");
      } else {
        toast.error("مشكلة في الشبكة أو الخادم");
      }
      console.log(error);
    } finally {
      setIsSubmitting(false); // إلغاء حالة "الإرسال قيد التنفيذ"
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input
        className="rounded-lg text-xl p-2 w-full bg-white focus:shadow-md"
        type="text"
        placeholder="أضف تعليقًا..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isSubmitting} // تعطيل الحقل أثناء الإرسال
      />
      <button
        type="submit"
        className="bg-green-700 text-white mt-2 p-1 w-min text-xl rounded-lg hover:bg-green-900 transition"
        disabled={isSubmitting} // تعطيل الزر أثناء الإرسال
      >
        {isSubmitting ? "جار الإرسال..." : "تعليق"} {/* تغيير النص أثناء الإرسال */}
      </button>
    </form>
  );
};

export default AddCommentForm;
