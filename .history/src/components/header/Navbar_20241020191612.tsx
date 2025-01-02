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
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(prevMenu => prevMenu === menu ? null : menu);
  };

  const closeMenu = () => setToggle(false);

  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/" passHref>
          <a className={styles.logo}>
            Portal <GrTechnology /> Web
          </a>
        </Link>
        <div className={styles.menu}>
          {toggle ? (
            <IoMdClose 
              onClick={closeMenu} 
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
          <li>
            <Link href="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link href="/articles?pageNumber=1" onClick={closeMenu}>Articles</Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu}>About</Link>
          </li>
          {isAdmin && (
            <li>
              <Link href="/admin" onClick={closeMenu}>Admin</Link>
            </li>
          )}
          <li>
            <span onClick={() => handleMenuClick('departments')}>
              Departments
            </span>
            {activeMenu === 'departments' && (
              <ul className={styles.subMenu}>
                <li><Link href="/departments/marketing" onClick={closeMenu}>Marketing</Link></li>
                <li><Link href="/departments/finance" onClick={closeMenu}>Finance</Link></li>
                <li><Link href="/departments/hr" onClick={closeMenu}>HR</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
