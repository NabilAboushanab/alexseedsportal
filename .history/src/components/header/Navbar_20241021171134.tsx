"use client"
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
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false); // إضافة حالة لقوائم Departments

  // Toggle menu state
  const handleMenuToggle = () => setToggle(prev => !prev);

  // Close the menu when a link is clicked
  const handleLinkClick = () => setToggle(false);

  // Toggle Departments submenu
  const handleDepartmentsToggle = () => setIsDepartmentsOpen(prev => !prev);

  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/" className={styles.logo}>
          Portal <GrTechnology /> Web
        </Link>
        <div className={styles.menu}>
          {toggle ? (
            <IoMdClose 
              onClick={handleMenuToggle} 
              aria-label="Close menu"
              aria-expanded={toggle ? "true" : "false"}
            />
          ) : (
            <AiOutlineMenu 
              onClick={handleMenuToggle} 
              aria-label="Open menu"
              aria-expanded={toggle ? "true" : "false"}
            />
          )}
        </div>
      </div>

      <div 
        className={`${styles.navLinkWrapper} ${toggle ? styles.openMenu : ''}`}
      >
        <ul className={styles.navLinks}>
          <Link onClick={handleLinkClick} className={styles.navLink} href="/">Home</Link>
          <Link onClick={handleLinkClick} className={styles.navLink} href="/articles?pageNumber=1">Articles</Link>
          <Link onClick={handleLinkClick} className={styles.navLink} href="/about">About</Link>
          {isAdmin && (
            <Link onClick={handleLinkClick} className={styles.navLink} href="/admin">Admin</Link>
          )}
          
          {/* رابط Departments مع القوائم الفرعية */}
          <li className={styles.navLink}>
            <button onClick={handleDepartmentsToggle} className={styles.dropdownToggle}>
              Departments
            </button>
            {isDepartmentsOpen && (
              <ul className={styles.subMenu}>
                <li>
                  <Link onClick={handleLinkClick} href="/departments/finance" className={styles.subMenuLink}>Finance</Link>
                </li>
                <li>
                  <Link onClick={handleLinkClick} href="/departments/hr" className={styles.subMenuLink}>HR</Link>
                </li>
                <li>
                  <Link onClick={handleLinkClick} href="/departments/it" className={styles.subMenuLink}>IT</Link>
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
