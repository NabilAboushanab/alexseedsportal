import Link from "next/link";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";

const page = () => {
  return (
    redirect("/departments/Filled-Oil/add")
  )
}

export default page