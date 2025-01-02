"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GrTechnology } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

interface NavbarProps {
  isAdmin: boolean;
}

const Navbar = ({ isAdmin }: NavbarProps) => {
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-green-300 border-b-4 border-green-500">
      <div className="flex justify-between items-center h-20 px-4">
        <Link href="/" className="text-2xl font-bold flex items-center">
          Portal <GrTechnology className="ml-2" /> Web
        </Link>
        <div className="text-4xl md:hidden">
          {toggle ? (
            <IoMdClose onClick={() => setToggle(!toggle)} aria-label="Close menu" />
          ) : (
            <AiOutlineMenu onClick={() => setToggle(!toggle)} aria-label="Open menu" />
          )}
        </div>
      </div>

      <div
        className={`${
          toggle ? "block" : "hidden"
        } md:flex md:items-center md:justify-between md:px-4 md:space-x-6`}
      >
        <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0">
          <li className="relative group">
            <Link
              onClick={() => setToggle(false)}
              className="text-lg font-semibold hover:text-blue-700"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="relative group">
            <Link
              onClick={() => setToggle(false)}
              className="text-lg font-semibold hover:text-blue-700"
              href="/articles?pageNumber=1"
            >
              Articles
            </Link>
          </li>
          <li className="relative group">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-lg font-semibold hover:text-blue-700 flex items-center"
            >
              Departments
              <svg
                className="ml-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/departments/sales">Sales</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/departments/finance">Finance</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link href="/departments/hr">HR</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="relative group">
            <Link
              onClick={() => setToggle(false)}
              className="text-lg font-semibold hover:text-blue-700"
              href="/about"
            >
              About
            </Link>
          </li>
          {isAdmin && (
            <li className="relative group">
              <Link
                onClick={() => setToggle(false)}
                className="text-lg font-semibold hover:text-blue-700"
                href="/admin"
              >
                Admin
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
