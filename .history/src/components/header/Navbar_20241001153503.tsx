"use client"
import React from 'react';
import Link from "next/link";
import styles from './header.module.css';
import { GrTechnology } from 'react-icons/gr';
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {IoMdClose} from "react-icons/io" ;

interface NavbarProps{
  isAdmin
}


const Navbar = () => {
  const[toggle,setToggle] = useState(false);
  return (
    <nav className={styles.navbar}>
    <div>
      <Link  href="/" className={styles.logo}>
      Portal
      <GrTechnology />
      Web
      </Link>   
<div className={styles.menu}>
 {toggle ? (<IoMdClose  onClick={() => setToggle(prev => !prev)} />) :  <AiOutlineMenu onClick={() => setToggle(prev => !prev)}/>}  
</div>

    </div>
    <div
     className={styles.navLinkWrapper}
     style={{
      clipPath: toggle  && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" || ""
    }}
    >
     

    <ul className={styles.navLinks}>
      <Link  onClick={() => setToggle(false)}  className={styles.navLink} href="/">Home</Link>
      <Link  onClick={() => setToggle(false)}  className={styles.navLink} href="/articles?pageNumber=1">Articles</Link>
      <Link  onClick={() => setToggle(false)}  className={styles.navLink} href="/about">About</Link>
      <Link  onClick={() => setToggle(false)}  className={styles.navLink} href="/admin">Dashboard</Link>
      <Link onClick={() => setToggle(false)} className={styles.navLink} href="/departments/Filled-Oil">Departments</Link>
     
      
    </ul>
    </div>
</nav>
  )
}

export default Navbar