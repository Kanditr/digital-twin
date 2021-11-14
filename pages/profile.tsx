import Header from "../components/header";
import Footer from "../components/footer";
import Icon from "../components/Icon";
import Link from "next/link";
import { useState } from "react";
import Items from "../components/items";
import User from "../components/user";

// data
import { bids } from "../components/mocks/bids";

const navLinks = [
  "On Sale",
  "Collectibles",
  "Created",
  "Likes",
  "Following",
  "Followers",
];

const socials = [
  {
    title: "twitter",
    url: "https://twitter.com/ui8",
  },
  {
    title: "instagram",
    url: "https://www.instagram.com/ui8net/",
  },
  {
    title: "facebook",
    url: "https://www.facebook.com/ui8.net/",
  },
];

const Profile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Header />
      {/* profile */}
      <div>
        {/* head */}
        <div className="h-60 pb-14 md:pb-14 lg:py-8 lg:h-80 bg-gradient-to-r from-blue-500 via-pink-500 to-black flex items-end relative overflow-hidden">
          {/* container */}
          <div className="flex justify-center md:justify-end w-full max-w-7xl mx-auto px-8 md:px-10 lg:px-20">
            {/* buttons */}
            <div
              className={
                visible === false
                  ? "flex md:flex-grow-0 px-2.5 md:px-0"
                  : "hidden"
              }
            >
              <button
                className="text-sm inline-flex items-center rounded-full px-4 h-10 border-2 text-white border-gray-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 mr-4"
                onClick={() => setVisible(true)}
              >
                <span className="mr-2 whitespace-nowrap">Edit cover photo</span>
                <Icon name="edit" size="16" fill="white" />
              </button>
              <Link href="#" passHref>
                <div className="text-sm inline-flex items-center cursor-pointer rounded-full px-4 h-10 border-2 text-white border-gray-400 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                  <span className="mr-2 whitespace-nowrap">Edit profile</span>
                  <Icon name="image" size="16" fill="white" />
                </div>
              </Link>
            </div>
            {/* file */}
            <div
              className={
                visible === true
                  ? "absolute top-2 left-2 w-24/25 h-24/25 flex justify-center pt-6 md:pt-0 items-start md:items-center text-center border-2 border-dashed rounded-xl transition-all"
                  : "absolute top-0 left-0 w-full h-full hidden justify-center items-center text-center border-2 border-dashed rounded-xl transition-all"
              }
            >
              <input
                className="absolute top-0 left-0 z-30 text-9xl items-center justify-center text-center opacity-0"
                type="file"
              />
              {/* wrap */}
              <div className="relative z-20">
                <Icon
                  name="upload-file"
                  size="48"
                  className="mx-auto md:mb-4 w-6 md:w-auto"
                  fill="white"
                />
                <div className="text-base md:text-2xl font-semibold text-white">
                  Drag and drop your photo here
                </div>
                <div className=" text-xs md:text-base text-white">
                  or click to browse
                </div>
              </div>
              {/* button */}
              <button
                className="absolute md:right-4 bottom-10 md:bottom-4 z-40 rounded-full text-sm px-4 h-10 bg-blue-500 hover:bg-blue-600 hover:text-white hover:border-blue-500 text-white transition-all"
                onClick={() => setVisible(false)}
              >
                Save photo
              </button>
            </div>
          </div>
        </div>
        {/* body */}
        <div className="relative z-30 pb-16 lg:py-20">
          {/* container */}
          <div className="block lg:flex items-start w-full max-w-7xl my-0 mx-auto px-8 md:px-10 lg:px-20">
            {/* user component */}
            <User className="" item={socials} />
            {/* wrapper */}
            <div className="flex-256 w-full pl-0 lg:w-256 lg:pl-8 xl:pl-16 md:pt-10 lg:pt-0">
              {/* nav */}
              <div className="flex -mx-8 mb-8 pl-6 md:pl-0 overflow-auto overflow-x-auto md:-mx-1.5 md:mb-8 whitespace-nowrap">
                {navLinks.map((x, index) => (
                  <button
                    className={
                      index === activeIndex
                        ? "bg-gray-800 text-gray-100 rounded-3xl hover:bg-gray-800 normal-case text-sm py-1 px-3 mx-1.5 transition-all"
                        : " bg-none text-gray-400 rounded-3xl hover:text-gray-800 hover:bg-white normal-case text-sm py-1 px-3 mx-1.5 transition-all"
                    }
                    onClick={() => setActiveIndex(index)}
                    key={index}
                  >
                    {x}
                  </button>
                ))}
              </div>
              {/* group */}
              <div>
                {/* item */}
                <div>
                  {activeIndex === 0 && <Items items={bids.slice(0, 3)} />}
                  {activeIndex === 1 && <Items items={bids.slice(0, 6)} />}
                  {activeIndex === 2 && <Items items={bids.slice(0, 2)} />}
                  {activeIndex === 3 && <Items items={bids.slice(0, 3)} />}
                  {/* {activeIndex === 4 && (
                  <Followers className={styles.followers} items={following} />
                )}
                {activeIndex === 5 && (
                  <Followers className={styles.followers} items={followers} />
                )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
