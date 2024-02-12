"use client";
import Link from "next/link";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Navigation Links */}
        <ul className=" font-medium flex space-x-4">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About Me</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <Link href="https://blog.midesofek.com" target="_blank">
            My Blog
          </Link>
          {/* <NavItem href="/experiences">Experiences</NavItem> */}
        </ul>
      </div>
    </nav>
  );
}

function NavItem({ href, children }) {
  return (
    <li>
      <Link href={href} className=" hover:text-brand-blue-dark">
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
