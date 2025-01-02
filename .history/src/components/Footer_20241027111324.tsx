import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <strong>حقوق النشر والطباعة 2025</strong>
      <span className={styles.designerText}>تم التصميم بواسطة نبيل ابوشنب</span>
    </div>
  );
};

export default Footer;
