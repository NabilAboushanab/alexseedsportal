"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { GrTechnology } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

interface NavbarProps {
  isAdmin: boolean;
}

const Navbar = ({ isAdmin }: NavbarProps) => {
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/" className={styles.logo}>
          Portal <GrTechnology /> Web
        </Link>
        <div className={styles.menu}>
          {toggle ? (
            <IoMdClose
              onClick={() => setToggle((prev) => !prev)}
              aria-label="Close menu"
              className={styles.icon}
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle((prev) => !prev)}
              aria-label="Open menu"
              className={styles.icon}
            />
          )}
        </div>
      </div>

      <div
        className={`${styles.navLinkWrapper} ${toggle ? styles.openMenu : ""}`}
      >
        <ul className={styles.navLinks}>
          <li>
            <Link onClick={() => setToggle(false)} className={styles.navLink} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setToggle(false)} className={styles.navLink} href="/articles?pageNumber=1">
              Articles
            </Link>
          </li>
          <li>
            <Link onClick={() => setToggle(false)} className={styles.navLink} href="/about">
              About
            </Link>
          </li>

          {isAdmin && (
            <li>
              <Link onClick={() => setToggle(false)} className={styles.navLink} href="/admin">
                Admin
              </Link>
            </li>
          )}

          {/* Departments with Dropdown */}
          <li className={styles.dropdown}>
            <span onClick={handleDropdown} className={styles.navLink}>
              Departments
            </span>
            {dropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link onClick={() => setToggle(false)} href="/departments/sales">
                    Sales
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setToggle(false)} href="/departments/hr">
                    HR
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setToggle(false)} href="/departments/it">
                    IT
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
