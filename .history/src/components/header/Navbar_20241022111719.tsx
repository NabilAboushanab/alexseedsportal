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
  const [showDepartmentsSubmenu, setShowDepartmentsSubmenu] = useState(false);
  const [showFilledOilSubmenu, setShowFilledOilSubmenu] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
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
              {/* Submenu for Admin */}
              {isAdmin && (
                <ul className={styles.submenu}>
                  <li>
                    <Link onClick={() => setToggle(false)} href="/admin/contracts">إدارة التعاقدات</Link>
                  </li>
                  <li>
                    <Link onClick={() => setToggle(false)} href="/admin/sales">إدارة المبيعات</Link>
                  </li>
                  <li>
                    <Link onClick={() => setToggle(false)} href="/admin/accounts">الحسابات</Link>
                  </li>
                  <li>
                    <Link onClick={() => setToggle(false)} href="/admin/balance">الميزان</Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              className={styles.navLink}
              onMouseEnter={() => setShowDepartmentsSubmenu(true)}
              onMouseLeave={() => setShowDepartmentsSubmenu(false)}
            >
              <Link href="/departments">Departments</Link>
              {/* Submenu */}
              {showDepartmentsSubmenu && (
                <ul className={styles.submenu}>
                  <li className={styles.navLink} onMouseEnter={() => setShowFilledOilSubmenu(true)} onMouseLeave={() => setShowFilledOilSubmenu(false)}>
                    <Link href="/departments/Filled-Oil">Filled Oil</Link>
                    {/* Submenu for Filled Oil */}
                    {showFilledOilSubmenu && (
                      <ul className={styles.submenuRight}>
                        <li>
                          <Link href="/departments/Filled-Oil/contracts"></Link>
                        </li>
                        <li>
                          <Link href="/departments/Filled-Oil/sales">إدارة المبيعات</Link>
                        </li>
                        <li>
                          <Link href="/departments/Filled-Oil/accounts">الحسابات</Link>
                        </li>
                        <li>
                          <Link href="/departments/Filled-Oil/balance">الميزان</Link>
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
