// src/app/_app.tsx
import { LanguageProvider } from "@/context/LanguageContext";

const MyApp = ({ Component, pageProps }) => {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
};

export default MyApp;
