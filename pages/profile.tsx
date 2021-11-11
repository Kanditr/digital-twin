import Header from "../components/header";
import Footer from "../components/footer";
import Icon from "../components/Icon";
import Link from "next/link";
import { useState } from "react";

// data
import { bids } from "../components/mocks/bids";

const Profile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Header />
      {/* profile */}
      <div>
        {/* head */}
        <div className="h-80 pb-14 lg:py-8 lg:h-80 bg-gradient-to-r from-blue-500 via-pink-500 to-black flex items-end relative overflow-hidden">
          {/* container */}
          <div className="flex justify-end w-full max-w-7xl mx-auto px-20">
            {/* buttons */}
            <div className={visible === false ? "flex" : "hidden"}>
              <button
                className="text-sm inline-flex items-center rounded-full px-4 h-10 border-2 text-white border-gray-200 hover:bg-blue-500 hover:text-white hover:border-blue-500 mr-4"
                onClick={() => setVisible(true)}
              >
                <span className="mr-2">Edit cover photo</span>
                <Icon name="edit" size="16" fill="white" />
              </button>
              <Link href="#" passHref>
                <div className="text-sm inline-flex items-center cursor-pointer rounded-full px-4 h-10 border-2 text-white border-gray-200 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                  <span className="mr-2">Edit profile</span>
                  <Icon name="image" size="16" fill="white" />
                </div>
              </Link>
            </div>
            {/* file */}
            <div
              className={
                visible === true
                  ? "absolute top-2 left-2 w-24/25 h-24/25 flex justify-center items-center text-center border-2 border-dashed rounded-xl"
                  : "absolute top-0 left-0 w-full h-full hidden justify-center items-center text-center border-2 border-dashed rounded-xl"
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
                  className="mx-auto mb-4"
                  fill="white"
                />
                <div className="text-2xl font-semibold text-white">
                  Drag and drop your photo here
                </div>
                <div className=" text-white">or click to browse</div>
              </div>
              {/* button */}
              <button
                className="absolute right-4 bottom-4 z-40 rounded-full text-sm px-4 h-10 bg-blue-500 hover:bg-blue-600 hover:text-white hover:border-blue-500 text-white transition-all"
                onClick={() => setVisible(false)}
              >
                Save photo
              </button>
            </div>
          </div>
        </div>
        {/* body */}
        <div>
          {/* container */}
          <div>
            {/* user component */}
            <div />
            {/* wrapper */}
            <div>
              {/* nav */}
              <div></div>
              {/* group */}
              <div>
                {/* item */}
                <div>
                  {/* Items */}
                  {/* Items */}
                  {/* Items */}
                  {/* Items */}
                  {/* Followers */}
                  {/* Followers */}
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
