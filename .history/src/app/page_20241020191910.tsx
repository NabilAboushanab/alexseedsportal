"use client"

import Hero from "@/components/home/Hero"
import WebHostingPlan from "@/components/home/WebHostingPlan"
import { useState } from "react"

// مكون القائمة الفرعية
const SubMenu = () => {
  return (
    <div className="bg-gray-100 p-4 mt-4 rounded-md shadow-lg">
      <ul>
        <li><a href="#">Web Hosting Plan 1</a></li>
        <li><a href="#">Web Hosting Plan 2</a></li>
        <li><a href="#">Web Hosting Plan 3</a></li>
      </ul>
    </div>
  )
}

const HomePage = () => {
  const [showSubMenu, setShowSubMenu] = useState(false)

  return (
    <section>
      <Hero/>
      <h2 className="text-center mt-10 text-3xl font-bold">
        choose Your Web Hosting Plan
      </h2>
      <div className="container m-auto flex justify-center items-center my-7 flex-wrap md:gap-7">
        <WebHostingPlan />
        <WebHostingPlan />
        <WebHostingPlan />
      </div>

      {/* أزرار أو عناصر لعرض القوائم الفرعية */}
      <div className="text-center mt-8">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setShowSubMenu(!showSubMenu)}
        >
          {showSubMenu ? "Hide Submenu" : "Show Submenu"}
        </button>

        {/* عرض القائمة الفرعية عند النقر */}
        {showSubMenu && <SubMenu />}
      </div>
    </section>
  )
}

export default HomePage
