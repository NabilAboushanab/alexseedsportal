// pages/_app.tsx
"use client"; // لجعل هذا المكون مكون عميل

import { LanguageProvider } from "@/context/LanguageContext";
import type { AppProps } from "next/app";
import Footer from '../components/Footer/'; // تأكد من المسار الصحيح
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [copyrightText, setCopyrightText] = useState("حقوق النشر والطباعة 2025 تم التصميم بواسطة نبيل ابوشنب"); // نص حقوق النشر

  return (
    <LanguageProvider>
      <Component {...pageProps} setCopyrightText={setCopyrightText} /> {/* تمرير الدالة */}
      <Footer copyrightText={copyrightText} /> {/* تمرير نص الحقوق */}
    </LanguageProvider>
  );
}

export default MyApp;
