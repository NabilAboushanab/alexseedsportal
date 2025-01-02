"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GrTechnology } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import styles from "./header.module.css";

interface NavbarProps {
  isAdmin: boolean;
}

const Navbar = ({ isAdmin }: NavbarProps) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/" className={styles.logo}>
          Portal
          <GrTechnology />
          Web
        </Link>
        <div className={styles.menu}>
          {toggle ? (
            <IoMdClose onClick={() => setToggle((prev) => !prev)} />
          ) : (
            <AiOutlineMenu onClick={() => setToggle((prev) => !prev)} />
          )}
        </div>
      </div>
      <div
        className={styles.navLinkWrapper}
        style={{
          clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" || ""
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
          {isAdmin && (
            <Link onClick={() => setToggle(false)} className={styles.navLink} href="/admin">
              Admin
            </Link>
          )}

          <li className={`${styles.navLink} ${styles.dropdownParent}`}>
            <Link onClick={() => setToggle(false)} href="/departments">
              Departments
            </Link>
            {/* القائمة الفرعية */}
            <ul className={styles.dropdown}>
              <li>
                <Link className={styles.dropdownLink} href="/departments/sales">
                  Sales
                </Link>
              </li>
              <li>
                <Link className={styles.dropdownLink} href="/departments/filled-oil">
                  Filled Oil
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
