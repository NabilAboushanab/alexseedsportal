import '../styles/globals.css'; // استيراد ملف الـ CSS العام
import Navbar from '../components/Navbar'; // استيراد الـ Navbar
import { LanguageProvider } from "@/context/LanguageContext"; // استيراد مزود سياق اللغة
import type { AppProps } from "next/app"; // استيراد النوع الخاص بـ AppProps

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider> {/* إحاطة التطبيق بمزود اللغة */}
      <Navbar isAdmin={true} /> {/* تمرير خاصية isAdmin للـ Navbar */}
      <Component {...pageProps} /> {/* عرض المكون الأساسي */}
    </LanguageProvider>
  );
}

export default MyApp;
