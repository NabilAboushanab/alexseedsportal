import { useState } from "react"; // استيراد useState لتبديل اللغة

const FilledOil = () => {
  const [language, setLanguage] = useState<"arabic" | "english">("arabic");

  // دالة تبديل اللغة
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "arabic" ? "english" : "arabic"));
  };

  return (
    <div className="mt-6 mb-16">
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleLanguage}
          className="bg-green-600 hover:bg-green-400 transition-colors text-white font-bold rounded-lg text-lg"
        >
          {language === "arabic" ? "Change to English" : "تغيير إلى العربية"}
        </button>
      </div>
      <div>
        {/* يمكنك إضافة المحتوى هنا بناءً على اللغة */}
        <p>{language === "arabic" ? "مرحبًا بك في صفحة الميزان" : "Welcome to the Balance page"}</p>
      </div>
    </div>
  );
};

export default FilledOil;
