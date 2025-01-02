// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer/Footer";
import { ReactNode, useState } from "react";
import { LanguageProvider } from '../context/LanguageContext'; // تأكد من أن المسار صحيح

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portal Web",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [copyrightText, setCopyrightText] = useState<string>('نص حقوق النشر الافتراضي');

  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <ToastContainer theme="colored" position="top-center"/>
          <main>
            {React.Children.map(children, child => 
              React.isValidElement(child) ? React.cloneElement(child, { setCopyrightText }) : child
            )}
          </main>
          <Footer copyrightText={copyrightText} /> {/* تمرير copyrightText هنا */}
        </LanguageProvider>
      </body>
    </html>
  );
}
