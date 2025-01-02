// pages/_app.tsx
import { LanguageProvider } from "@/context/LanguageContext";
import { InstructionsProvider } from "@/context/InstructionsContext"; // تأكد من المسار
import type { AppProps } from "next/app";
import Footer from '../components/Footer/Footer'; // تأكد من المسار

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <InstructionsProvider> {/* ضع هنا */}
        <Component {...pageProps} />
        <Footer /> {/* Footer يظهر هنا */}
      </InstructionsProvider> {/* حتى هنا */}
    </LanguageProvider>
  );
}

export default MyApp;
