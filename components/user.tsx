import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import Icon from "../components/Icon";

const User = ({ className, item }: any) => {
  const { account } = useWeb3React();
  const [follow, setFollow] = useState(false);

  var firstAcc = account?.slice(0, 10);
  var lastAcc = account?.slice(account.length - 4);

  const profile = {
    avatar: "/images/content/avatar-big.jpg",
    name: "John Doe",
    firstAcc: firstAcc,
    lastAcc: lastAcc,
    info: "A wholesome farm owner in Chiangmai. Upcoming gallery solo show in Bangkok",
    joinDate: "Mar 15, 2021",
  };

  return (
    //   user
    <div className="w-full -mt-8 mx-0 mb-12 md:mb-0 flex-shrink-0 lg:w-64 lg:-mt-48 py-8 px-7 rounded-2xl bg-white border text-center shadow-xl">
      {/* avatar */}
      <div className="w-40 h-40 mx-auto mb-6">
        <img
          className="w-full h-full object-cover rounded-full"
          src="/images/content/avatar-10.png"
          alt="Avatar"
        />
      </div>
      {/* name */}
      <div className="mb-1 text-2xl font-medium">{profile.name}</div>
      {/* account */}
      <div className="inline-flex items-center mb-5">
        <div className="text-sm font-medium text-gray-600">
          {profile.firstAcc}...{profile.lastAcc}
        </div>
        <button className="ml-2 fill-current text-blue-500">
          <Icon name="copy" size="16" />
        </button>
      </div>
      {/* info */}
      <div className="mb-12 text-xs text-gray-400">{profile.info}</div>
      {/* control */}
      <div className="inline-block relative mb-12">
        {/* btns */}
        <div className="flex justify-center items-center">
          {/* follow */}
          <button
            className="rounded-full text-sm px-4 h-10 bg-blue-500 hover:bg-blue-600 hover:text-white hover:border-blue-500 text-white transition-all hidden md:block mr-2.5"
            onClick={() => setFollow(!follow)}
          >
            {follow === true ? <span>Unfollow</span> : <span>Follow</span>}
          </button>
          {/* share */}
          <button className="w-10 h-10 p-0 mr-2 rounded-full border-2 border-gray-100 hover:bg-blue-500  hover:border-blue-500 transition-all fill-current text-gray-400  hover:fill-current hover:text-white">
            <Icon name="share" size="20" className="mx-2" />
          </button>
          {/* report */}
          <button className="w-10 h-10 p-0 rounded-full border-2 border-gray-100 hover:bg-blue-500  hover:border-blue-500 transition-all fill-current text-gray-400  hover:fill-current hover:text-white">
            <Icon name="report" size="20" className="mx-2" />
          </button>
        </div>
        {/* share */}
        <div></div>
      </div>
      {/* social */}
      <div className="flex justify-center fill-current text-gray-400">
        {item.map((x: any, index: any) => (
          <a href={x.url} target="_blank" rel="noopener noreferrer" key={index}>
            <Icon name={x.title} size="20" className="mx-2" />
          </a>
        ))}
      </div>
      {/* joinDate */}
      <div className="mt-12 pt-12 border-t text-xs text-gray-400">
        Member since {profile.joinDate}
      </div>
    </div>
  );
};

export default User;
