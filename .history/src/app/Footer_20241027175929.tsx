// src/app/Footer.tsx
"use client"
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

  const handleStorageChange = () => {
    const directions = localStorage.getItem("latestDirections");
    if (directions) {
      setLatestDirections(directions);
    }
  };

  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div
      style={{ height: '60px', position: 'fixed', bottom: 0, width: '100%', overflow: 'hidden' }}
      className="flex items-center justify-between text-white bg-green-400 px-4"
    >
      <strong style={{ animation: 'slide 10s linear infinite' }}>
        Copyright 2025 Alexseeds
      </strong>
      {latestDirections && (
        <div style={{ animation: 'slide 10s linear infinite' }}>
          {latestDirections}
        </div>
      )}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(100%);
          }
          50% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
