// import type { AppProps } from "next/app";
import type { NextPage } from "next";
import Link from "next/link";

const Blockchain: NextPage = () => {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl">Digital Twin Project</p>
        <div className="flex mt-4">
          <Link href="/block-index">
            <a className="mr-6 text-pink-500">First</a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-pink-500">Sell Digital Asset</a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-pink-500">My Digital Assets</a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-pink-500">Creator Dashboard</a>
          </Link>
          <Link href="/home">
            <a className="mr-6 text-pink-500">Home</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default Blockchain;
