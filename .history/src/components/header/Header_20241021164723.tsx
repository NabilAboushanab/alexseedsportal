import Link from 'next/link';
import styles from './header.module.css';
import Navbar from './Navbar';
import { cookies } from 'next/headers';
import { verifyTokenForPage } from '@/utils/verifyToken';
import LogoutButton from '../comments/LogoutButton';

const Header = () => {
  const token = cookies().get("jwtToken")?.value || "";
  const payload = verifyTokenForPage(token);

  const isAdmin = payload?.role === 'admin'; // تحقق من أن الحقل 'role' موجود

  return (
    <header className={styles.header}>
      <Navbar isAdmin={isAdmin} />
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
            <Link href="/login" className={styles.btn}>Login</Link>
            <Link href="/register" className={styles.btn}>Register</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
