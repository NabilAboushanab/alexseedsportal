const Footer = () => {
  return (
    <div
      style={{ height: '60px', position: 'fixed', bottom: 0, width: '100%' }}
      className="flex items-center justify-center text-white bg-green-400 px-4"
    >
      <strong className="text-center">Copyright 2025 Portal Web</strong>
      <span className="absolute right-4">Designed by Developer : Nabil Aboushanab</span>
    </div>
  );
};

export default Footer;
