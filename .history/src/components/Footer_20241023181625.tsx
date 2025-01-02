import React from 'react';
import './h.css'; // تأكد من استيراد ملف CSS

const Footer = () => {
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
      }}
    >
      {/* محتوى متحرك داخل التذييل */}
      <div className="marquee">
        <strong>هذا هو النص المتحرك في التذييل!</strong>
      </div>
    </div>
  );
};

export default Footer;
