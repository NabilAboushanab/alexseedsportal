import { useLanguage } from "@/context/LanguageContext"; // Import the useLanguage hook
import React from "react";

const FilledOil: React.FC = () => {
  const { language, setLanguage } = useLanguage(); // Destructure language and setLanguage from the context

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
      {/* Add more JSX here based on the language state */}
    </div>
  );
};

export default FilledOil;
