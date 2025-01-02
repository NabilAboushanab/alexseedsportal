"use client"
import React from 'react';
import Link from 'next/link';
import styles from "./header.module.css";
import Navbar from './Navbar';
import Cookies from 'js-cookie'; // استيراد js-cookie
import { verifyTokenForPage } from '@/utils/verifyToken';
import LogoutButton from '../comments/LogoutButton';

const Header = () => {
  const token = Cookies.get("jwtToken") || ""; // استخدام js-cookie لقراءة الكوكيز
  const payload = verifyTokenForPage(token);

  return (
    <header className={styles.header}>
      <Navbar isAdmin={payload?.isAdmin || false} />
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
            <Link className={styles.btn} href="/login">Login</Link>
            <Link className={styles.btn} href="/register">Register</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
