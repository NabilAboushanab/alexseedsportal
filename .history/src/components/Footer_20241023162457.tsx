'use client'; // تأكد من إضافة هذا السطر في أعلى الملف

const Footer = () => {
  return (
    <div
      style={{
        height: '60px',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        overflow: 'hidden',
      }}
      className="bg-green-400 px-1"
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          animation: 'marquee 20s linear infinite', // زيادة المدة إلى 20 ثانية
        }}
      >
        <strong>حقوق الطبع والنشر 2025  البوابة الالكترونية لادارة الانتاج / تم التصميم بواسطة نبيل ابوشنب / تعل </strong>
        <span className="ml-2"> </span>
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
