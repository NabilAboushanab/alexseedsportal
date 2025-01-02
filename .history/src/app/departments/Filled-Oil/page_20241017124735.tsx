"use client"; // جعل هذا المكون مكون عميل

import Link from "next/link";
import { useState } from "react";

interface ButtonProps {
  href: string;
  label: { arabic: string; english: string }; // تعريف التسميات باللغتين
}

const Button: React.FC<ButtonProps> = ({ href, label }) => (
  <Link
    href={href}
    className="bg-blue-600 hover:bg-blue-400 transition-colors text-white font-bold rounded-lg text-lg flex justify-center items-center w-64 h-16 mb-2"
  >
    {label}
  </Link>
);

interface Column {
  title: { arabic: string; english: string };
  buttons: ButtonProps[];
}

const columns: Column[] = [
  {
    title: { arabic: "الميزان", english: "Balance" },
    buttons: [{ href: "/departments/Filled-Oil/add", label: { arabic: "صادر الميزان", english: "Export Balance" } }],
  },
  {
    title: { arabic: "الحسابات", english: "Accounts" },
    buttons: [
      { href: "/departments/Filled-Oil/edit", label: { arabic: "بيانات العملاء", english: "Client Data" } },
      { href: "/departments/Filled-Oil/edit", label: { arabic: "المطالبات", english: "Claims" } },
      { href: "/departments/Filled-Oil/edit", label: { arabic: "تصفية صادر الميزان", english: "Balance Export Filtering" } },
      { href: "/departments/Filled-Oil/edit", label: { arabic: "المتحصلات من العملاء", english: "Collections from Clients" } },
      { href: "/departments/Filled-Oil/edit", label: { arabic: "حسابات البنوك والخزينة", english: "Bank and Treasury Accounts" } },
      { href: "/departments/Filled-Oil/edit", label: { arabic: "حساب تسويات", english: "Settlements Account" } },
      { href: "/departments/Filled-Oil/edit", label: { arabic: "حسابات العملاء", english: "Client Accounts" } },
    ],
  },
  {
    title: { arabic: "ادارة المبيعات", english: "Sales Management" },
    buttons: [
      { href: "/departments/Filled-Oil/edit", label: { arabic: "تسجيل ايداعات العملاء", english: "Client Deposits Registration" } },
      { href: "/departments/Filled-Oil/edit", label: { arabic: "بيان المطالبات", english: "Claims Statement" } },
      { href: "/departments/Filled-Oil/edit", label: { arabic: "الكوتة اليومية للعملاء", english: "Daily Customer Quota" } },
      { href: "/departments/Filled-Oil/edit", 
