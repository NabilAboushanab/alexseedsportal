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
  {isAdmin && (
    <li>
      <Link onClick={() => setToggle(false)} className={styles.navLink} href="/admin">Admin</Link>
    </li>
  )}
  <li className={styles.navLinkDropdown}> {/* This is the dropdown */}
    <Link onClick={() => setToggle(false)} className={styles.navLink} href="/departments">Departments</Link>
    <ul className={styles.subMenu}> {/* Submenu */}
      <li><Link href="/departments/department1">Department 1</Link></li>
      <li><Link href="/departments/department2">Department 2</Link></li>
      <li><Link href="/departments/department3">Department 3</Link></li>
    </ul>
  </li>
</ul>
