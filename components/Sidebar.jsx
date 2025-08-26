import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar({ Open, setOpen }) {
  const pathname = usePathname();
  return (
    <div
      className={` transition-all delay-300 z-20 ${
        Open
          ? "w-full h-screen backdrop-blur-[1.5px] fixed top-0 md:hidden"
          : "w-full h-screen backdrop-blur-[1.5px] translate-x-full fixed top-0 md:hidden"
      }`}
    >
      <div className="relative w-full h-full">
        <div className="h-full absolute top-0 right-0 bg-black w-[80%] px-4 py-6">
          <X className="mb-4 text-slate-200 " onClick={() => setOpen(false)} />
          <p href="/" className="text-xl text-slate-200 font-bold text-center">
            CALCULATOOLS
          </p>
          <div className="flex flex-col gap-4 m-4 pt-6">
            {NavLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-blue-500 font-semibold"
                    : "text-slate-200"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
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

export default Sidebar;
