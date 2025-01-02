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
      className="flex items-center justify-between text-white bg-green-400 px-4"
    >
      <strong className="footer-text">
        Copyright 2025 Alexseeds
      </strong>
      {latestDirections && (
        <div className="footer-text">
          {latestDirections}
        </div>
      )}
      <style jsx>{`
        .footer-text {
          white-space: nowrap; /* يمنع النص من الانكسار إلى سطر جديد */
          display: inline-block;
          animation: slide 10s linear infinite; /* إضافة الحركة */
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
