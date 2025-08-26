import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-black py-4 px-4 flex flex-col md:items-center lg:justify-center mt-16">
      <div>
        <p className="text-xl font-bold text-slate-200 mb-6 uppercase">
          Assistance and support
        </p>
        <div className="flex flex-col gap-3">
          <Link className="text-slate-400" href="#">
            FAQ
          </Link>
          <Link className="text-slate-400" href="#">
            Terms and conditions
          </Link>
          <Link className="text-slate-400" href="#">
            Policie and cookies
          </Link>
          <Link className="text-slate-400" href="#">
            Contact us
          </Link>
        </div>
        <div className="flex gap-8 p-6 w-full items-center md:px-0 justify-center">
          <Facebook className="text-slate-100 h-8 w-8" />
          <Instagram className="text-slate-100 h-8 w-8" />
          <Twitter className="text-slate-100 h-8 w-8" />
          <Youtube className="text-slate-100 h-8 w-8" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
