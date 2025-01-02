// pages/_app.tsx
import { LanguageProvider } from "@/context/LanguageContext";
import type { AppProps } from "next/app";
import Footer from '../components/Footer/Footer'; // تأكد من المسار الصحيح

function MyApp({ Component, pageProps }: AppProps) {
  const copyrightText = "حقوق النشر والطباعة 2025 تم التصميم بواسطة نبيل ابوشنب"; // نص حقوق النشر

  return (
    <LanguageProvider>
      <Component {...pageProps} />
      <Footer copyrightText={copyrightText} /> {/* تمرير نص الحقوق */}
    </LanguageProvider>
  );
}

export default MyApp;
