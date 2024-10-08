import { Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-12 flex justify-between px-3 py-10 text-lg">
      <div>© 2024 Vinay Sharma</div>
      <div className="hidden space-x-7 sm:block">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/faqs">FAQs</Link>
      </div>

      <div>
        <Youtube />
      </div>
    </div>
  );
};

export default Footer;
