"use client";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              Logo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
