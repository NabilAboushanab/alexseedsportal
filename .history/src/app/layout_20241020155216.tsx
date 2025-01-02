// src/app/layout.tsx
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { LanguageProvider, useLanguage } from '../context/LanguageContext'; // تأكد من أن المسار صحيح
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portal Web",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  const { language } = useLanguage(); // الحصول على اللغة من السياق

  return (
    <html lang={language === 'arabic' ? 'ar' : 'en'}>
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <ToastContainer theme="colored" position="top-center" />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
};

export default RootLayout;
