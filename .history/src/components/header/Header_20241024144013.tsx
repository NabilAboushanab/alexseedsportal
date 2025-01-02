import Link from 'next/link';
import styles from './header.module.css';
import Navbar from './Navbar';
import { cookies } from 'next/headers';
import { verifyTokenForPage } from '@/utils/verifyToken';
import LogoutButton from '../comments/LogoutButton';

// Define an interface for payload
interface Payload {
  username: string;
  // Add other fields as needed
}

const Header = async () => { // Marking the component as async
  const cookieJar = await cookies(); // Await the cookies
  const token = cookieJar.get('jwtToken')?.value || '';
  const payload: Payload | null = verifyTokenForPage(token);

  return (
    <header className={styles.header}>
      <Navbar />
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
