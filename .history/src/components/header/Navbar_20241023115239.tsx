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
  const [showAdminSubmenu, setShowAdminSubmenu] = useState(false);

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
            
            <li className={styles.navLink}>
              <Link href="/admin" onClick={() => setToggle(false)}>Admin</Link>
              <button 
                onClick={() => setShowAdminSubmenu(!showAdminSubmenu)} 
                className={styles.submenuToggle}
              >
                ▼
              </button>
              {showAdminSubmenu && (
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

            <li className={styles.navLink}>
              <Link href="/departments" onClick={() => setToggle(false)}>Departments</Link>
              <button 
                onClick={() => setShowDepartmentsSubmenu(!showDepartmentsSubmenu)} 
                className={styles.submenuToggle}
              >
                ▼
              </button>
              {showDepartmentsSubmenu && (
                <ul className={styles.submenu}>
                  <li className={styles.navLink}>
                    <Link href="/departments/Filled-Oil" onClick={() => setToggle(false)}>Filled Oil</Link>
                    <button 
                      onClick={() => setShowFilledOilSubmenu(!showFilledOilSubmenu)} 
                      className={styles.submenuToggle}
                    >
                      ▼
                    </button>
                    {showFilledOilSubmenu && (
                      <ul className={styles.submenuRight}>
                        <li>
                          <Link href="/departments/Filled-Oil/contracts" onClick={() => setToggle(false)}>Contracts Management</Link>
                        </li>
                        <li>
                          <Link href="/departments/Filled-Oil/sales" onClick={() => setToggle(false)}>Sales Management</Link>
                        </li>
                        <li>
                          <Link href="/departments/Filled-Oil/accounts" onClick={() => setToggle(false)}>Accounts</Link>
                        </li>
                        <li>
                          <Link href="/departments/Filled-Oil/balance" onClick={() => setToggle(false)}>Scale</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link href="/departments/sales-oil" onClick={() => setToggle(false)}>Sales Oil</Link>
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
