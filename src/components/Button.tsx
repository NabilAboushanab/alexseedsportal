// src/components/Button.tsx
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext'; // Import the useLanguage hook

interface ButtonProps {
  href: string;
  label: { arabic: string; english: string }; // Ensure this structure is correct
}

const Button: React.FC<ButtonProps> = ({ href, label }) => {
  const { language } = useLanguage(); // Use useLanguage hook to access the language context

  return (
    <Link href={href}>
      <button className="px-4 py-2 bg-blue-500 text-white rounded">
        {language === 'arabic' ? label.arabic : label.english}
      </button>
    </Link>
  );
};

export default Button;
