"use client";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar({ setOpen }) {
  const pathname = usePathname();
  return (
    <div className="w-full p-4 md:px-12 max-sm:fixed z-10 top-0  flex items-center justify-between bg-black">
      <Link href="/" className="text-2xl text-white font-bold">
        CALCULATOOLS
      </Link>
      <div className="hidden md:flex items-center justify-end w-full gap-4 pr-12">
        {NavLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`${
              pathname === link.href
                ? "text-blue-500 font-semibold"
                : "text-white"
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="flex gap-4 items-center justify-center">
        <Search className="md:hidden mr-2 w-6 h-6 text-white" />
        <Menu
          onClick={() => setOpen(true)}
          className="md:hidden mr-2 w-8 h-8 text-white"
        />
      </div>
    </div>
  );
}

const NavLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Tools",
    href: "/tools",
  },
  {
    title: "About",
    href: "/about",
  },
];
export default Navbar;
