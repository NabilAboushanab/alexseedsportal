import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* محتوى متحرك داخل التذييل */}
      <div className={styles.marquee}>
        <strong>هذا هو النص المتحرك في التذييل!</strong>
      </div>
    </div>
  );
};

export default Footer;
