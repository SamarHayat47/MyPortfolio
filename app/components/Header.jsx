"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { BiSolidHappy } from "react-icons/bi";

const Header = () => {
  const [icons, seticons] = useState(true);
  return (
    <div className="flex container mx-auto justify-between items-center h-[60px] px-3 ">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold text-blue-500"
      >
        Samar Hayat
        <BiSolidHappy className="text-4xl" />
      </Link>
      <nav className="hidden md:block text-gray-500">
        <ul className="flex items-center justify-between gap-4">
          <li>
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-blue-500">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => seticons(!icons)}
      >
        {icons ? <FaBars /> : <FaXmark />}
      </div>
      <div
        className={`absolute top-[60px] z-10 bg-gray-100 md:hidden max-w-full left-0 container mx-auto border-t-2 border-white transition-all duration-300 ${
          icons ? "opacity-0 h-0" : "opacity-100 h-auto"
        }`}
      >
        <ul className="flex items-center justify-between gap-5 py-5 flex-col">
          <li>
            <Link
              href="/"
              onClick={() => seticons(!icons)}
              className="hover:text-blue-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => seticons(!icons)}
              className="hover:text-blue-500"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              onClick={() => seticons(!icons)}
              className="hover:text-blue-500"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
