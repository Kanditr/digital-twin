import Link from "next/link";
import Icon from "./Icon";

const Footer = () => {
  return (
    //   footer
    <footer className="border-t">
      {/* container */}
      <div className="flex items-center w-full max-w-screen-xl my-0 mx-auto py-0 px-8 lg:px-10 xl:px-20">
        {/* row */}
        <div className="block lg:flex pt-20 pb-8 lg:pb-12 border-b w-full">
          {/* col */}
          <div className="lg:grid lg:grid-cols-3">
            {/* col 1 */}
            <div className="flex-grow pr-8 lg:relative lg:mb-8 lg:p-0 mb-8">
              <Link href="/">
                <div className="w-32 text-2xl leading-none relative z-10 inline-block flex-shrink-0 mr-auto cursor-pointer mb-8">
                  Digital Twin
                </div>
              </Link>
              <div className="max-w-xs text-base lg:text-xl font-light text-gray-500">
                The New Creative Economy.
              </div>
            </div>
            {/* col 2 */}
            <div className="w-full block border-t border-b lg:border-none  lg:w-72">
              <div className="py-8 border-b lg:py-0 lg:border-b-0 font-medium">
                Discover
              </div>
              <div className="py-8 font-medium">FAQs</div>
            </div>
            {/* col 3 */}
            <div className="flex-shrink-0 w-full lg:w-96 mt-8 lg:mt-0">
              <div className="mb-6 lg:mb-10 font-medium">Join Newsletter</div>
              <div className="font-light mb-6">
                Subscribe our newsletter to get more free design course and
                resource
              </div>
              <form className="relative">
                <input
                  className="font-light rounded-3xl w-full lg:w-84 -pr-10 text-sm h-12 border-2 border-gray-200 transition-all focus:outline-white focus:border-gray-600 focus:ring-transparent"
                  placeholder="Enter your email"
                  type="text"
                  name="email"
                />
                <button className="absolute top-2 right-2 lg:right-6 bottom-2 w-8 h-8 bg-blue-500 rounded-full hover:bg-blue-600 transition-all">
                  <Icon
                    className="ml-2"
                    name="arrow-next"
                    size="14"
                    fill="white"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* foot */}
      <div className="block lg:flex justify-between w-full max-w-screen-xl my-0 mx-auto py-0 px-8 lg:px-10 xl:px-20 mt-6 mb-8 lg:mt-8 text-sm text-gray-400 ">
        <div className="text-center">
          Copyright © 2021 DIGITAL TWIN. All rights reserved
        </div>
        <div className="hidden lg:flex">
          We use cookies for better service. <a href="/#">Accept</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
