import { useState } from "react";
import Link from "next/link";
import Menu from "./menu";
import { injected } from "./wallet/connector";
import { useWeb3React } from "@web3-react/core";

const Header = () => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  var firstAcc = account?.slice(0, 10);
  var lastAcc = account?.slice(account.length - 4);

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

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
        <button
          onClick={connect}
          className={
            active
              ? "text-center justify-center rounded-full text-sm px-1 pr-4 h-10 border-2 border-gray-200 hover:border-blue-500 transition-all hidden md:block whitespace-nowrap mr-3"
              : "text-center justify-center rounded-full text-sm px-4 h-10 border-2 border-gray-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all hidden md:block whitespace-nowrap mr-3"
          }
        >
          {active ? (
            <span className="relative flex items-center">
              <img
                src="/images/content/avatar-10.png"
                alt="Avatar"
                className="rounded-full w-8 h-8 flex-shrink-0 mr-3"
              />
              {firstAcc}....{lastAcc}
            </span>
          ) : (
            <span>Connect wallet</span>
          )}
        </button>
        <button
          onClick={disconnect}
          className={
            active
              ? "text-center justify-center rounded-full text-sm px-4 h-10 border-2 border-gray-200 hover:bg-gray-400 hover:text-white hover:border-gray-400 transition-all hidden md:block whitespace-nowrap"
              : "hidden"
          }
        >
          Disconnect
        </button>
      </div>
    </header>
  );
};

export default Header;
