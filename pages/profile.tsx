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
        <div className="h-56 pb-14 lg:py-8 lg:h-80 bg-gradient-to-r from-blue-500 via-pink-500 to-black flex items-end">
          {/* container */}
          <div className="flex justify-end w-full max-w-7xl mx-auto px-20">
            {/* buttons */}
            <div>
              <button onClick={() => setVisible(true)}>
                <span>Edit cover photo</span>
                <Icon name="edit" size="16" />
              </button>

              <Link href="#" passHref>
                <div>
                  <span>Edit profile</span>
                  <Icon name="image" size="16" />
                </div>
              </Link>
            </div>
            {/* file */}
            <div>
              <input type="file" />
              {/* wrap */}
              {/* <div>
                <Icon name="upload-file" size="48" />
                <div>Drag and drop your photo here</div>
                <div>or click to browse</div>
              </div> */}
              {/* button */}
              <button onClick={() => setVisible(false)}>Save photo</button>
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
