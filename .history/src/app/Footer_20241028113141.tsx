// src/app/Footer.tsx
"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext"; // استيراد useLanguage

const Footer = () => {
  const [latestDirections, setLatestDirections] = useState("");
  const { language } = useLanguage(); // استخدام السياق للحصول على اللغة

  // نصوص التعليمات حسب اللغة
  const directionsText = {
    arabic: "التعليمات: يرجى اتباع الخطوات بدقة.",
    english: "Instructions: Please follow the steps carefully."
  };

  // استرجاع أحدث التعليمات من الـ local storage عند تحميل المكون
  useEffect(() => {
    const directions = localStorage.getItem("latestDirections");
    if (directions) {
      setLatestDirections(directions); // تعيين التعليمات الأخيرة عند التحميل
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

  // عدم تحديث التعليمات عند تغيير اللغة، فقط استرجاع آخر تعليمات
  useEffect(() => {
    const currentDirections = localStorage.getItem("latestDirections");
    if (currentDirections) {
      setLatestDirections(currentDirections); // الحفاظ على التعليمات المدخلة
    }
  }, [language]); // يعتمد على تغييرات اللغة

  return (
    <div
      style={{ height: '60px', position: 'fixed', bottom: 0, width: '100%', overflow: 'hidden' }}
      className="bg-green-400 text-white flex items-center justify-between"
    >
      <div className="footer-text-wrapper">
        <strong className="footer-text">
          {language === "arabic" ? "حقوق النشر 2025 شركة الاسكندرية للزيوت النباتية" : "Copyright 2025 Alexseeds"}
        </strong>
      </div>
      {latestDirections && (
        <div className="directions-text">
          <strong>{latestDirections}</strong> {/* جعل النص عريضًا هنا */}
        </div>
      )}
      <style jsx>{`
        .footer-text-wrapper {
          display: flex; /* يجعل النصوص في صف واحد */
          white-space: nowrap; /* يمنع النص من الانكسار إلى سطر جديد */
          position: relative; /* يسمح بالنقل داخل الفوتر */
          overflow: hidden; /* يمنع النص من الخروج عن الإطار */
        }

        .footer-text {
          margin-right: 50px; /* مسافة بين العناصر */
          font-weight: bold; /* جعل الخط عريض */
        }

        .directions-text {
          color: blue; /* تغيير اللون إلى الأزرق */
          white-space: nowrap; /* يمنع النص من الانكسار إلى سطر جديد */
          position: absolute; /* يسمح للنص بالتحرك */
          animation: slide 30s linear infinite; /* زيادة مدة الحركة لجعلها أبطأ */
          left: 100%; /* بدء الحركة من خارج الشاشة على اليمين */
          font-weight: bold; /* جعل النص عريض */
        }

        @keyframes slide {
          0% {
            transform: translateX(0); /* البداية من خارج الشاشة على اليمين */
          }
          100% {
            transform: translateX(-100%); /* النهاية إلى خارج الشاشة على اليسار */
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
