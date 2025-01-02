import { LanguageProvider } from "@/context/LanguageContext"; // Make sure the path is correct

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
