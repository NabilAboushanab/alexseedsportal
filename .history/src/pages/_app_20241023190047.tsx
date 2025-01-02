// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Footer from '../components/Footer';  // استيراد مكون الـFooter
import { LanguageProvider } from '@/context/LanguageContext'; // تأكد من صحة المسار

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <>
        <Component {...pageProps} />
        <Footer /> {/* إضافة الـFooter */}
      </>
    </LanguageProvider>
  );
}

export default MyApp;
