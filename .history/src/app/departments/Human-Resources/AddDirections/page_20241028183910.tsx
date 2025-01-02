// src/app/departments/Human-Resources/AddDirections/page.tsx
"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext"; // استيراد useLanguage

const HumanResourcesPage = () => {
  const [directions, setDirections] = useState("");
  const { language, setLanguage } = useLanguage(); // استخدام السياق للحصول على اللغة وتحديثها

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // إرسال البيانات إلى API
    const response = await fetch('/api/add-directions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Directions: directions }),
    });

    if (!response.ok) {
      console.error("Error adding directions:", response.statusText);
      return;
    }

    // حفظ التعليمات في الـ local storage بعد الإضافة الناجحة
    localStorage.setItem("latestDirections", directions);
    setDirections(""); // إعادة تعيين حقل الإدخال بعد الإرسال

    // تحديث الفوتر
    window.dispatchEvent(new Event('storage')); // Trigger the storage event
  };

  const toggleLanguage = () => {
    setLanguage((prev: "arabic" | "english") => (prev === "arabic" ? "english" : "arabic"));
  };

  return (
    <section>
      <div className='w-auto mx-auto rounded-md p-5 bg-slate-400 border-2 border-gray-300'>
        <div className="flex justify-between items-center mb-3">
          <h1 className="font-bold text-3xl">
            {language === "arabic" ? "إضافة تعليمات" : "Add Directions"}
          </h1>

          <button
            onClick={toggleLanguage}
            className="bg-green-600 hover:bg-green-400 transition-colors text-white font-bold rounded-lg text-sm p-1"
          >
            {language === "arabic" ? "English" : "عربى"}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <input
            type="text"
            name="Directions"
            placeholder={language === "arabic" ? "تعليمات" : "Directions"}
            className="p-2 text-lg rounded-md text-gray-950 placeholder-blue-500 w-full"
            value={directions}
            onChange={(e) => setDirections(e.target.value)} 
          />

          <div className="col-span-2 flex justify-center">
            <button type="submit" className="bg-cyan-300 hover:bg-cyan-400 text-black font-semibold text-xl rounded-md p-3 transition-colors">
              {language === "arabic" ? "إرسال" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default HumanResourcesPage;
