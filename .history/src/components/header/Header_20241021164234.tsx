// Header.js
import Link from 'next/link';
import styles from './header.module.css';
import { cookies } from 'next/cookies'; // Assuming this is how you import cookies in Next.js
import { verifyTokenForPage } from '@/utils/verifyToken';
import LogoutButton from '../comments/LogoutButton';

const Header = () => {
  const token = cookies().jwtToken || ''; // Adjust this based on how your cookie is named
  const payload = verifyTokenForPage(token);

  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.right}>
        {payload ? (
          <>
            <strong className='text-blue-800 md:text-xl capitalize'>
              {payload?.username}
            </strong>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link href="/login" className={styles.btn}>
              Login
            </Link>
            <Link href="/register" className={styles.btn}>
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
