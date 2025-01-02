// src/components/Button.tsx
import Link from "next/link";

interface ButtonProps {
  href: string;
  label: { arabic: string; english: string }; // تعريف label ككائن يحتوي على خاصيتين
}

const Button: React.FC<ButtonProps> = ({ href, label }) => (
  <Link
    href={href}
    className="bg-blue-600 hover:bg-blue-400 transition-colors text-white font-bold rounded-lg text-lg flex justify-center items-center w-64 h-16 mb-2"
  >
    {label.arabic} {/* تأكد من استخدام label ككائن */}
  </Link>
);

export default Button;
