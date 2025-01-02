import Link from 'next/link';
import styles from './navbar.module.css';
import { cookies } from 'next/headers';
import { verifyTokenForPage } from '@/utils/verifyToken';
import LogoutButton from '../comments/LogoutButton';

const Navbar = () => {
  const token = cookies().get('jwtToken')?.value || '';
  const payload = verifyTokenForPage(token);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        {/* باقي الروابط */}
      </div>

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
    </nav>
  );
};

export default Navbar;
