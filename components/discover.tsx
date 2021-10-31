import { useState } from "react";
import Card from "./card";
import Listbox from "./listbox";
import Link from "next/link";
import Icon from "./Icon";
import ListboxSorting from "./listbox-sorting";

//data
import { bids } from "./mocks/bids";
// import { Icon } from "@mui/material";

const navLinks = ["All items", "Art", "Game", "Photography", "Music"];
const dateOptions = ["Recently added", "Long added"];
const priceOptions = ["Highest price", "The lowest price"];
const likesOptions = ["Most liked", "Least liked"];
const creatorOptions = ["Verified only", "All", "Most liked"];
const sortingOptions = [] as any[];
navLinks.map((x) => sortingOptions.push(x));

const Discover = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [date, setDate] = useState(dateOptions[0]);
  const [price, setPrice] = useState(priceOptions[0]);
  const [likes, setLikes] = useState(likesOptions[0]);
  const [creator, setCreator] = useState(creatorOptions[0]);
  const [sorting, setSorting] = useState(sortingOptions[0]);
  const [visible, setVisible] = useState(false);

  return (
    // section
    <div className="py-16 md:py-28 lg:py-32 bg-gray-100">
      {/* container */}
      <div className="w-full max-w-screen-xl my-0 mx-auto py-0 px-8 lg:px-10 xl:px-20">
        {/* title */}
        <h3 className="text-4xl leading-tight mb-8 md:mb-16">Discover</h3>
        {/* top */}
        <div className="relative block md:flex justify-between md:mb-8 mb-3 md:h-12">
          {/* dropdown */}
          <div className="w-full mb-3 md:w-64 lg:w-44">
            <Listbox />
          </div>
          {/* nav */}
          <div className="absolute hidden lg:flex top-2 left-1/3 mt-0.5 justify-center">
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
          {/* nav dropdown */}
          <div className="block lg:hidden mb-3 w-full md:w-64 lg:w-44">
            <ListboxSorting />
          </div>
          {/* filter button */}
          <div className="relative flex justify-center items-center flex-shrink-0">
            <button
              className="w-full rounded-full h-12 bg-blue-500 hover:bg-blue-600 transition-all text-white"
              onClick={() => setVisible(!visible)}
            >
              <div className="flex justify-center">
                <span className="flex relative justify-center items-center pl-6">
                  Filter
                </span>
                <span className="w-14 pr-2.5 justify-center items-center flex">
                  {visible === false ? (
                    <Icon name="filter" size="18" fill="white" />
                  ) : (
                    <Icon name="close" size="12" fill="white" />
                  )}
                </span>
              </div>
            </button>
          </div>
        </div>
        {/* filter */}
        <div></div>
        {/* list */}
        <div className="-mx-0 md:-mx-0">
          {/* slider */}
          <div className="block m-0 md:flex flex-wrap md:-mt-8 -mx-4 mb-0 overflow-visible pb-16 rounded-2xl">
            {bids.map((x, index) => (
              <Card
                className="mt-8 mx-4 max-w-full md:flex-33 md:max-w-1/3 lg:flex-25 lg:max-w-1/4"
                item={x}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
