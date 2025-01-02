"use client";
import { useLanguage } from "@/context/LanguageContext"; // استخدام السياق للحصول على اللغة

const FilledOil: React.FC = () => {
  const { language, setLanguage } = useLanguage(); // استخدام السياق للحصول على اللغة وتحديثها

  const toggleLanguage = () => {
    setLanguage((prev: "arabic" | "english") => (prev === "arabic" ? "english" : "arabic"));
  };

  return (
    <div className="mt-6 mb-16">
      {/* زر لتبديل اللغة */}
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleLanguage}
          className="bg-green-600 hover:bg-green-400 transition-colors text-white font-bold rounded-lg text-lg p-2"
        >
          {language === "arabic" ? "English" : "عربى"}
        </button>
      </div>
    </div>
  );
};

export default FilledOil;
