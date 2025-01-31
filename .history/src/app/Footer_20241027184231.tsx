// src/app/Footer.tsx
"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext"; // استيراد useLanguage

const Footer = () => {
  const [latestDirections, setLatestDirections] = useState("");
  const { language } = useLanguage(); // استخدام السياق للحصول على اللغة

  // استرجاع أحدث التعليمات من الـ local storage عند تحميل المكون
  useEffect(() => {
    const directions = localStorage.getItem("latestDirections");
    if (directions) {
      setLatestDirections(directions);
    }

    const handleStorageChange = () => {
      const newDirections = localStorage.getItem("latestDirections");
      if (newDirections) {
        setLatestDirections(newDirections);
      }
    };

    // إضافة مستمع للحدث 'storage'
    window.addEventListener('storage', handleStorageChange);
    
    // التنظيف عند فك التركيب
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // نصوص التعليمات حسب اللغة
  const directionsText = {
    arabic: "التعليمات: يرجى اتباع الخطوات بدقة.",
    english: "Instructions: Please follow the steps carefully."
  };

  // تحديث التعليمات عند تغيير اللغة
  useEffect(() => {
    const currentDirections = localStorage.getItem("latestDirections");
    if (currentDirections) {
      setLatestDirections(directionsText[language]); // تغيير النص حسب اللغة
    }
  }, [language]); // يعتمد على تغييرات اللغة

  return (
    <div
      style={{ height: '60px', position: 'fixed', bottom: 0, width: '100%', overflow: 'hidden' }}
      className="bg-green-400 text-white flex items-center justify-end"
    >
      <div className="footer-text-wrapper">
        <strong className="footer-text">
          {language === "arabic" ? "حقوق النشر 2025 شركة الاسكندرية للزيوت النباتية" : "Copyright 2025 Alexseeds"}
        </strong>
        {latestDirections && (
          <span className="footer-text">
            {latestDirections}
          </span>
        )}
      </div>
      <style jsx>{`
        .footer-text-wrapper {
          display: flex; /* يجعل النصوص في صف واحد */
          white-space: nowrap; /* يمنع النص من الانكسار إلى سطر جديد */
          animation: slide 15s linear infinite; /* إضافة الحركة */
        }

        .footer-text {
          margin-right: 50px; /* مسافة بين العناصر */
          font-weight: bold; /* جعل الخط عريض */
        }

        @keyframes slide {
          0% {
            transform: translateX(100%); /* البداية من خارج الصفحة على اليمين */
          }
          100% {
            transform: translateX(-100%); /* النهاية إلى خارج الصفحة على اليسار */
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
