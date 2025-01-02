// pages/_app.tsx
import { LanguageProvider } from "@/context/LanguageContext";
import { InstructionsProvider } from "@/context/InstructionsContext"; // تأكد من المسار الصحيح
import type { AppProps } from "next/app";
import Footer from '../components/Footer/Footer'; // تأكد من المسار الصحيح

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <InstructionsProvider> {/* تأكد من إضافة هذا العنصر هنا */}
        <Component {...pageProps} />
        <Footer /> {/* Footer يظهر هنا */}
      </InstructionsProvider>
    </LanguageProvider>
  );
}

export default MyApp;
