import React from 'react';
import Link from 'next/link';

const FilledOil = () => {
  return (
    <Link href="/departments/Filled-Oil/contracts">
      <button>
      <Link
          href="/departments/Filled-Oil/add"
          className="bg-cyan-300 hover:bg-cyan-400 transition-colors text-black py-1 px-5 font-bold"
        >
          التعاقدات
        </Link>
      </button>
    </Link>
  );
};

export default FilledOil;
