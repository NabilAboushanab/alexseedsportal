// src/app/Footer.tsx
"use client";
import { useEffect, useState } from "react";

const Footer = () => {
  const [latestDirections, setLatestDirections] = useState("");

  // استرجاع أحدث التعليمات من الـ local storage عند تحميل المكون
  useEffect(() => {
    const directions = localStorage.getItem("latestDirections");
    if (directions) {
      setLatestDirections(directions);
    }
  }, []);

  return (
    <div
      style={{ height: '60px', position: 'fixed', bottom: 0, width: '100%', overflow: 'hidden' }}
      className="bg-green-400 text-white flex items-center"
    >
      <div className="footer-text-wrapper">
        <strong className="footer-text">
          Copyright 2025 Alexseeds
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
        }

        @keyframes slide {
          0% {
            transform: translateX(100%); /* البداية من اليمين */
          }
          100% {
            transform: translateX(-100%); /* النهاية إلى اليسار */
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
