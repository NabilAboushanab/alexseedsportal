import Link from 'next/link';
import styles from './header.module.css';
import Navbar from './Navbar';
import { cookies } from 'next/headers';
import { verifyTokenForPage } from '@/utils/verifyToken';
import LogoutButton from '../comments/LogoutButton';

const Header = () => {
  const token = cookies().components\header\Header.tsxget('jwtToken')?.value || '';
  const payload = verifyTokenForPage(token);

  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.right}>
        {payload ? (
          <>
            <strong className="text-blue-800 md:text-xl capitalize">
              {payload?.username}
            </strong>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link className={`${styles.btn} ${styles.loginBtn}`} href="/login">
              Login
            </Link>
            <Link className={`${styles.btn} ${styles.registerBtn}`} href="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
