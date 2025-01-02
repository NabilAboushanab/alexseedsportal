// pages/_app.tsx
import { LanguageProvider } from "@/context/LanguageContext"; // تأكد من المسار الصحيح
import type { AppProps } from "next/app";
import Footer from '../components/Footer/Footer'; // تأكد من المسار الصحيح

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
      <Footer /> {/* يمكنك إضافة التعليمات هنا إذا رغبت في ذلك */}
    </LanguageProvider>
  );
}

export default MyApp;
