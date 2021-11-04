import { useState } from "react";
import Link from "next/link";
import Menu from "./menu";

const Header = () => {
  return (
    //   header
    <header className="border-none relative z-20 pt-12 pb-6 md:py-5 md:border-solid md:border-b-2 border-gray-100">
      {/* container */}
      <div className="flex items-center w-full max-w-screen-xl my-0 mx-auto py-0 px-8 lg:px-10 xl:px-20">
        {/* logo */}
        <Link href="/">
          <div className="w-32 text-2xl leading-none relative z-10 inline-block flex-shrink-0 mr-auto cursor-pointer">
            Digital Twin
          </div>
        </Link>
        <div className="flex md:hidden">
          <Menu />
        </div>
        {/* button */}
        <Link href="/">
          <button className="rounded-full text-sm px-4 h-10 bg-blue-500 hover:bg-blue-600 hover:text-white hover:border-blue-500 text-white transition-all hidden md:block mr-3">
            Upload
          </button>
        </Link>
        <Link href="/">
          <button className="text-center justify-center rounded-full text-sm px-6 h-10 border-2 border-gray-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all hidden md:block whitespace-nowrap">
            {"Connect wallet"}
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
