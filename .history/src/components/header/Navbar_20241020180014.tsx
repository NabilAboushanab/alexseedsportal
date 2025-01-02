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
  const [dropdown, setDropdown] = useState<string | null>(null); // لحالة القوائم الفرعية

  const handleDropdownToggle = (menu: string) => {
    setDropdown(dropdown === menu ? null : menu); // لتبديل بين القائمة الفرعية المفتوحة والمغلقة
  };

  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/" className={styles.logo}>
          Portal <GrTechnology /> Web
        </Link>
        <div className={styles.menu}>
          {toggle ? (
            <IoMdClose onClick={() => setToggle(prev => !prev)} />
          ) : (
            <AiOutlineMenu onClick={() => setToggle(prev => !prev)} />
          )}
        </div>
      </div>
      <div
        className={styles.navLinkWrapper}
        style={{
          clipPath: toggle ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "",
        }}
      >
        <ul className={styles.navLinks}>
          <Link onClick={() => setToggle(false)} className={styles.navLink} href="/">
            Home
          </Link>
          <Link onClick={() => setToggle(false)} className={styles.navLink} href="/articles?pageNumber=1">
            Articles
          </Link>
          <Link onClick={() => setToggle(false)} className={styles.navLink} href="/about">
            About
          </Link>

          {/* قائمة Departments مع قائمة فرعية */}
          <li className={styles.navLink} onClick={() => handleDropdownToggle('departments')}>
            Departments
            <ul className={`${styles.submenu} ${dropdown === 'departments' ? styles.show : ''}`}>
              <li>
                <Link onClick={() => setToggle(false)} href="/departments/Filled-Oil" className={styles.subLink}>Filled Oil</Link>
              </li>
              <li>
                <Link onClick={() => setToggle(false)} href="/departments/sales-oil" className={styles.subLink}>Sales Oil</Link>
              </li>
            </ul>
          </li>

          {/* قائمة Admin مع قائمة فرعية */}
          {isAdmin && (
            <li className={styles.navLink} onClick={() => handleDropdownToggle('admin')}>
              Admin
              <ul className={`${styles.submenu} ${dropdown === 'admin' ? styles.show : ''}`}>
                <li>
                  <Link onClick={() => setToggle(false)} href="/admin/articles-table?pageNumber=1" className={styles.subLink}>Articles</Link>
                </li>
                <li>
                  <Link onClick={() => setToggle(false)} href="/admin/comments-table" className={styles.subLink}>Comments</Link>
                </li>
              </ul>
            </li>
          )}

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
