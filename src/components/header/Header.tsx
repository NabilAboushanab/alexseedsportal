import Navbar from "./Navbar";
import styles from "./header.module.css";
import { cookies } from "next/headers";
import { verifyTokenForPage } from "@/utils/verifyToken";
import HeaderClient from "./HeaderClient";


interface Payload {
  username: string;
  isAdmin: boolean;
}

const Header = async () => {
  // جلب التوكن والتحقق
  const cookieJar = await cookies();
  const token = cookieJar.get("jwtToken")?.value || "";
  const payload: Payload | null = verifyTokenForPage(token);

  const isAdmin = payload ? payload.isAdmin : false;
  const username = payload?.username || null;

  return <HeaderClient isAdmin={isAdmin} username={username} />;
};

export default Header;
