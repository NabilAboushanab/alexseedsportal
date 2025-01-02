import React from 'react';

const Footer = ({ instructions }) => {
  return (
    <div
      style={{
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333', // لون خلفية داكن
        color: 'white', // لون النص
        padding: '0 20px',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden', // يمنع العناصر الزائدة من الخروج
      }}
    >
      {/* التعليمات المتحركة */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          animation: 'marquee 15s linear infinite',
          overflow: 'hidden',
          flexGrow: 1,
        }}
      >
        <strong>{instructions}</strong>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default Footer;
