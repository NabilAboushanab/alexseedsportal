import React, { useState } from 'react';
import Link from 'next/link';

const FilledOil = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'ar' ? 'en' : 'ar'));
  };

  return (
    <div>
      <Link href="/departments/Filled-Oil/contracts">
        <button>
          <Link
            href="/departments/Filled-Oil/add"
            className="bg-green-600 hover:bg-green-400 transition-colors text-white font-bold rounded-lg text-sm h-12 px-4"
          >
            {language === 'ar' ? 'التعاقدات' : 'Contracts'}
          </Link>
        </button>
      </Link>

      <button
        onClick={toggleLanguage}
        className="bg-blue-600 hover:bg-blue-400 transition-colors text-white font-bold rounded-lg text-sm h-12 px-4 mt-4"
      >
        {language === 'ar' ? 'تغيير اللغة إلى الإنجليزية' : 'Switch to Arabic'}
      </button>
    </div>
  );
};

export default FilledOil;
