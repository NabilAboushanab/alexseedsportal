import { LanguageProvider } from "@/context/LanguageContext"; // التأكد من المسار

function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default App;
