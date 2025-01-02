// src/components/LanguageToggle.tsx
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage}>
      {language === 'ar' ? 'تغيير إلى الإنجليزية' : 'Switch to Arabic'}
    </button>
  );
};

export default LanguageToggle;
