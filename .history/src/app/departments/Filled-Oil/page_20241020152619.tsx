import React from 'react';
import Link from 'next/link';

const FilledOil = () => {
  return (
    <Link href="/departments/Filled-Oil/contracts">
      <button>
      <Link
          href="/departments/Filled-Oil/add"
          className="bg-green-600 hover:bg-green-400 transition-colors text-white font-bold rounded-lg text-sm h-12 px-4"
        >
          التعاقدات
        </Link>
      </button>
    </Link>
  );
};

export default FilledOil;
