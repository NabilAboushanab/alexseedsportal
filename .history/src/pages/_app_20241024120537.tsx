// pages/_app.tsx

import { LanguageProvider } from "@/context/LanguageContext"; // Ensure the correct path
import type { AppProps } from "next/app";
import Footer from '../components/Footer/Footer'; // تأكد من المسار الصحيح

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
      <Footer />
    </LanguageProvider>
  );
}

export default MyApp;
