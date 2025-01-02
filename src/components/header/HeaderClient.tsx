"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import LogoutButton from "../comments/LogoutButton";
import styles from "./header.module.css";
import Navbar from "./Navbar";

interface HeaderClientProps {
  isAdmin: boolean;
  username: string | null;
}

const HeaderClient: React.FC<HeaderClientProps> = ({ isAdmin, username }) => {
  const pathname = usePathname();

  // إخفاء الهيدر للصفحات المستثناة
  const excludedPaths = ["/register", "/login"];
  if (pathname && excludedPaths.includes(pathname)) return null;

  return (
    <header className={styles.header}>
      <Navbar isAdmin={isAdmin} />
      <div className={styles.right}>
        {username ? (
          <>
            <strong className="text-blue-800 md:text-xl capitalize">
              {username}
            </strong>
            <LogoutButton />
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </header>
  );
};

export default HeaderClient;
