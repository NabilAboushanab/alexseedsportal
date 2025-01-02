"use client";
import React, { useState } from 'react';
import Link from "next/link";
import styles from './header.module.css';
import { GrTechnology } from 'react-icons/gr';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

interface NavbarProps {
  isAdmin: boolean; // إذا كان يجب إظهار قائمة Admin
}

const Navbar = ({ isAdmin }: NavbarProps) => {
  const [toggle, setToggle] = useState(false);
  const [showDepartmentsSubmenu, setShowDepartmentsSubmenu] = useState(false);
  const [showFilledOilSubmenu, setShowFilledOilSubmenu] = useState(false);
  const [showAdminSubmenu, setShowAdminSubmenu] = useState(false); // لإظهار قائمة Admin الفرعية

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
            
            <li
              className={styles.navLink}
              onMouseEnter={() => setShowAdminSubmenu(true)}
              onMouseLeave={() => setShowAdminSubmenu(false)}
            >
              <Link href="/admin">Admin</Link>
              {/* Submenu for Admin */}
              {showAdminSubmenu && (
                <ul className={styles.submenu}>
                  <li>
                    <Link onClick={() => setToggle(false)} href="/admin/admin">Articles</Link>
                  </li>
                  <li>
                    <Link onClick={() => setToggle(false)} href="/admin/comments">Comments</Link>
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
