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
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const handleSubmenuToggle = (menuName: string) => {
    setActiveSubmenu((prevSubmenu) => (prevSubmenu === menuName ? null : menuName));
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          Portal <GrTechnology /> Web
        </Link>
        <div className={styles.menu}>
          {toggle ? (
            <IoMdClose 
              onClick={() => setToggle(false)} 
              aria-label="Close menu"
            />
          ) : (
            <AiOutlineMenu 
              onClick={() => setToggle(true)} 
              aria-label="Open menu"
            />
          )}
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

            <li 
              className={styles.navLink}
              onClick={() => handleSubmenuToggle('admin')}
            >
              <Link href="/admin">Admin</Link>
              {activeSubmenu === 'admin' && (
                <ul className={styles.submenu}>
                  <li>
                    <Link onClick={() => setToggle(false)} href="/admin">Articles</Link>
                  </li>
                  <li>
                    <Link onClick={() => setToggle(false)} href="/admin/comments-table">Comments</Link>
                  </li>
                </ul>
              )}
            </li>

            <li 
              className={styles.navLink}
              onClick={() => handleSubmenuToggle('departments')}
            >
              <Link href="/departments">Departments</Link>
              {activeSubmenu === 'departments' && (
                <ul className={styles.submenu}>
                  <li 
                    className={styles.navLink} 
                    onClick={() => handleSubmenuToggle('filled-oil')}
                  >
                    <Link href="/departments/Filled-Oil">Filled Oil</Link>
                    {activeSubmenu === 'filled-oil' && (
                      <ul className={styles.submenuRight}>
                        <li>
                          <Link href="/departments/Filled-Oil/contracts">Contracts Management</Link>
                        </li>
                        <li>
                          <Link href="/departments/Filled-Oil/sales">Sales Management</Link>
                        </li>
                        <li>
                          <Link href="/departments/Filled-Oil/accounts">Accounts</Link>
                        </li>
                        <li>
                          <Link href="/departments/Filled-Oil/balance">Scale</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link href="/departments/sales-oil">Sales Oil</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
