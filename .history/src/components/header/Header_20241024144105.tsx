import Link from 'next/link';
import styles from './header.module.css';
import Navbar from './Navbar';
import { cookies } from 'next/headers';
import { verifyTokenForPage } from '@/utils/verifyToken';
import LogoutButton from '../comments/LogoutButton';

interface Payload {
  username: string;
  isAdmin: boolean; // Ensure isAdmin is part of the payload
}

const Header = async () => {
  const cookieJar = await cookies();
  const token = cookieJar.get('jwtToken')?.value || '';
  const payload: Payload | null = verifyTokenForPage(token);

  // Determine if the user is an admin based on the payload
  const isAdmin = payload ? payload.isAdmin : false;

  return (
    <header className={styles.header}>
      <Navbar isAdmin={isAdmin} /> {/* Pass isAdmin prop */}
      <div className={styles.right}>
        {payload ? (
          <>
            <strong className="text-blue-800 md:text-xl capitalize">
              {payload.username}
            </strong>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link
              className={`${styles.btn} ${styles.loginBtn}`}
              href="/login"
              aria-label="Login"
            >
              Login
            </Link>
            <Link
              className={`${styles.btn} ${styles.registerBtn}`}
              href="/register"
              aria-label="Register"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
