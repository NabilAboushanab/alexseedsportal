"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import { memo } from 'react';
import styles from './header.module.css';
import { GrTechnology } from 'react-icons/gr';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

interface NavbarProps {
  isAdmin: boolean;
}

const Navbar = ({ isAdmin }: NavbarProps) => {
  const [toggle, setToggle] = useState(false);
  const [departmentsMenu, setDepartmentsMenu] = useState(false);
  const router = useRouter();

  // Close the menu when the route changes
  useEffect(() => {
    const handleRouteChange = () => setToggle(false);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/" className={styles.logo}>
          <a>
            Portal <GrTechnology /> Web
          </a>
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
            <Link href="/">
              <a className={styles.navLink} onClick={() => setToggle(false)}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/articles?pageNumber=1">
              <a className={styles.navLink} onClick={() => setToggle(false)}>Articles</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={styles.navLink} onClick={() => setToggle(false)}>About</a>
            </Link>
          </li>
          {isAdmin && (
            <li>
              <Link href="/admin">
                <a className={styles.navLink} onClick={() => setToggle(false)}>Admin</a>
              </Link>
            </li>
          )}
          <li 
            className={styles.navLink} 
            onClick={() => setDepartmentsMenu(prev => !prev)}
          >
            Departments
            <span className={styles.arrow}>▼</span> {/* يمكنك تغيير السهم حسب حاجتك */}
          </li>
          {departmentsMenu && (
            <ul className={styles.submenu}>
              <li>
                <Link href="/departments/marketing">
                  <a className={styles.navLink} onClick={() => setToggle(false)}>Marketing</a>
                </Link>
              </li>
              <li>
                <Link href="/departments/engineering">
                  <a className={styles.navLink} onClick={() => setToggle(false)}>Engineering</a>
                </Link>
              </li>
              <li>
                <Link href="/departments/sales">
                  <a className={styles.navLink} onClick={() => setToggle(false)}>Sales</a>
                </Link>
              </li>
              {/* يمكنك إضافة المزيد من الأقسام حسب الحاجة */}
            </ul>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default memo(Navbar);
