import React from 'react';

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
      {/* محتوى ثابت داخل التذييل */}
      <strong>هذا هو التذييل الثابت</strong>
    </div>
  );
};

export default Footer;
