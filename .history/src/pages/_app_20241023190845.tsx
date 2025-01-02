// pages/_app.tsx
import '../styles/globals.css'; // تأكد من وجود هذا الملف
import type { AppProps } from 'next/app';
import Footer from '../components/Footer'; // استيراد مكون الـ Footer
import { LanguageProvider } from '@/context/LanguageContext'; // تأكد من صحة المسار

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <>
        <Component {...pageProps} />
        <Footer /> {/* إضافة الـ Footer */}
      </>
    </LanguageProvider>
  );
}

export default MyApp;
