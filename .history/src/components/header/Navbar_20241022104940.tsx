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
  const [submenuToggle, setSubmenuToggle] = useState(false); // للتحكم بالقائمة الفرعية

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
          <li>
            <Link onClick={() => setToggle(false)} className={styles.navLink} href="/admin">Admin</Link>
          </li>
          <li>
            <div 
              className={styles.navLink} 
              onClick={() => setSubmenuToggle(prev => !prev)}
            >
              Departments
            </div>
            {submenuToggle && (
              <ul className={styles.submenu}>
                <li>
                  <Link href="/departments/marketing" onClick={() => setToggle(false)}>Marketing</Link>
                </li>
                <li>
                  <Link href="/departments/sales" onClick={() => setToggle(false)}>Sales</Link>
                </li>
                <li>
                  <Link href="/departments/hr" onClick={() => setToggle(false)}>HR</Link>
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
