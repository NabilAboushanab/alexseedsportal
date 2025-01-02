// pages/_app.tsx
"use client"; // لجعل هذا المكون مكون عميل

import { LanguageProvider } from "@/context/LanguageContext";
import type { AppProps } from "next/app";
import Footer from '../components/Footer/Footer'; // تأكد من المسار الصحيح
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [copyrightText, setCopyrightText] = useState("حقوق النشر والطباعة 2025 تم التصميم بواسطة نبيل ابوشنب"); // نص حقوق النشر

  return (
    <LanguageProvider>
      <Component {...pageProps} setCopyrightText={setCopyrightText} /> {/* تمرير الدالة لتحديث النص */}
      <Footer copyrightText={copyrightText} /> {/* تمرير نص الحقوق إلى الفوتر */}
    </LanguageProvider>
  );
}

export default MyApp;
