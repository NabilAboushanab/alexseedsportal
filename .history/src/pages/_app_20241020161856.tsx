// src/pages/_app.tsx
import { AppProps } from 'next/app';
import { LanguageProvider } from '../context/LanguageContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
};

export default MyApp;
