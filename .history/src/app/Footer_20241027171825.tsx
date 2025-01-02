// src/app/Footer.tsx

import { useEffect, useState } from "react";

const Footer = () => {
  const [latestDirections, setLatestDirections] = useState("");

  // استرجاع أحدث التعليمات من الـ local storage عند تحميل المكون
  useEffect(() => {
    const directions = localStorage.getItem("latestDirections");
    if (directions) {
      setLatestDirections(directions);
    }
  }, []);

  return (
    <div
      style={{ height: '60px', position: 'fixed', bottom: 0, width: '100%' }}
      className="flex items-center justify-between text-white bg-green-400 px-4"
    >
      <strong>Copyright 2025 Alexseeds</strong>
      {latestDirections && <div>{latestDirections}</div>}
    </div>
  );
};

export default Footer;
