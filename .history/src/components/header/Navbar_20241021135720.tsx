"use client"
import React, { useState } from 'react';
import Link from "next/link";
import styles from './header.module.css';  // استخدام CSS Modules
import { GrTechnology } from 'react-icons/gr';  // أيقونة من react-icons
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

interface NavbarProps {
  isAdmin: boolean;  // خاصية لتحديد ما إذا كان المستخدم Admin
}

const Navbar = ({ isAdmin }: NavbarProps) => {
  const [toggle, setToggle] = useState(false);  // حالة لفتح/إغلاق القائمة

  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/" className={styles.logo}>
          Portal <GrTechnology /> Web  {/* الشعار */}
        </Link>
        <div className={styles.menu}>
          {toggle ? (
            <IoMdClose 
              onClick={() => setToggle(prev => !prev)} 
              aria-label="Close menu"
            />
          ) : (
            <AiOutlineMenu 
              onClick={() => setToggle(prev => !prev)} 
              aria-label="Open menu"
            />
          )}
        </div>
      </div>

      <div className={`${styles.navLinkWrapper} ${toggle ? styles.openMenu : ''}`}>
        <ul className={styles.navLinks}>
          <Link onClick={() => setToggle(false)} className={styles.navLink} href="/">Home</Link>
          <Link onClick={() => setToggle(false)} className={styles.navLink} href="/articles?pageNumber=1">Articles</Link>
          <Link onClick={() => setToggle(false)} className={styles.navLink} href="/about">About</Link>
          {isAdmin && (
            <Link onClick={() => setToggle(false)} className={styles.navLink} href="/admin">Admin</Link>
          )}
          <Link onClick={() => setToggle(false)} className={styles.navLink} href="/departments">Departments</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
