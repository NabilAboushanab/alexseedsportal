// pages/_app.tsx
import { LanguageProvider } from "@/context/LanguageContext"; // تأكد من المسار الصحيح
import type { AppProps } from "next/app";
import Footer from '../components/Footer/Footer'; // تأكد من المسار الصحيح

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
      <Footer /> {/* Footer يظهر هنا */}
    </LanguageProvider>
  );
}

export default MyApp;
