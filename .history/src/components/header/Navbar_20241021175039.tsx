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
  const [showDepartmentsMenu, setShowDepartmentsMenu] = useState(false);

  const toggleDepartmentsMenu = () => setShowDepartmentsMenu(!showDepartmentsMenu);

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
          <Link onClick={() => setToggle(false)} className={styles.navLink} href="/">Home</Link>
          <Link onClick={() => setToggle(false)} className={styles.navLink} href="/articles?pageNumber=1">Articles</Link>
          <Link onClick={() => setToggle(false)} className={styles.navLink} href="/about">About</Link>
          {isAdmin && (
            <Link onClick={() => setToggle(false)} className={styles.navLink} href="/admin">Admin</Link>
          )}

          {/* Departments Link with Submenu */}
          <li className={styles.navLink} onClick={toggleDepartmentsMenu}>
            <span className={styles.navLinkText}>Departments</span>
            {showDepartmentsMenu && (
              <ul className={styles.subMenu}>
                <li><Link onClick={() => setToggle(false)} className={styles.navLink} href="/departments/department1">Department 1</Link></li>
                <li><Link onClick={() => setToggle(false)} className={styles.navLink} href="/departments/department2">Department 2</Link></li>
                <li><Link onClick={() => setToggle(false)} className={styles.navLink} href="/departments/department3">Department 3</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
