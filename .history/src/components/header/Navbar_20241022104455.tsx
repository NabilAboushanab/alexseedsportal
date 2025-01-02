"use client";
import React, { useState } from 'react';
import Link from "next/link";
import styles from './header.module.css';
import { GrTechnology } from 'react-icons/gr';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

interface NavbarProps {
  isAdmin: boolean;
}

const Navbar = ({ isAdmin }: NavbarProps) => {
  const [toggle, setToggle] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false); // حالة القائمة الفرعية

  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/" className={styles.logo}>
          Portal <GrTechnology /> Web
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

      <div 
        className={`${styles.navLinkWrapper} ${toggle ? styles.openMenu : ''}`}
      >
        <ul className={styles.navLinks}>
          <li>
            <Link onClick={() => setToggle(false)} className={styles.navLink} href="/">Home</Link>
          </li>
          <li>
            <Link onClick={() => setToggle(false)} className={styles.navLink} href="/articles?pageNumber=1">Articles</Link>
          </li>
          <li>
            <Link onClick={() => setToggle(false)} className={styles.navLink} href="/about">About</Link>
          </li>
          {isAdmin && (
            <li>
              <Link onClick={() => setToggle(false)} className={styles.navLink} href="/admin">Admin</Link>
            </li>
          )}
          <li
            onMouseEnter={() => setShowSubmenu(true)}  // إظهار القائمة الفرعية عند تمرير الماوس
            onMouseLeave={() => setShowSubmenu(false)} // إخفاء القائمة الفرعية عند مغادرة الماوس
            className={styles.navLink}
          >
            <Link href="/departments">Departments</Link>
            {showSubmenu && (  // القائمة الفرعية
              <ul className={styles.submenu}>
                <li>
                  <Link href="/departments/sales">Sales</Link>
                </li>
                <li>
                  <Link href="/departments/filled-oil">Filled Oil</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
