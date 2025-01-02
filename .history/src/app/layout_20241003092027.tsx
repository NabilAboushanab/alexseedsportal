import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {react}
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portal Web",
  description: "Generated by create next app",
};

interface RootLayoutProps{
  children:React.ReactNode;
}

export default function RootLayoutProps({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Header />
       <ToastContainer theme="colored" position="top-center"/>
        <main>
        {children}
        </main>
        <Footer />

        </body>
    </html>
  );
}



