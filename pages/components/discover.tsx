import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Card from "./card";

//data
import { bids } from "../components/mocks/bids";

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

  const handleChange = (event: SelectChangeEvent) => {
    setDate(event.target.value);
  };

  return (
    // section
    <div className="pt-8 md:pt-16 xl:pt-32">
      {/* container */}
      <div className="w-full max-w-screen-xl my-0 mx-auto py-0 md:px-8 lg:px-10 xl:px-20">
        {/* title */}
        <h3 className="text-4xl leading-tight mb-8 md:mb-16">Discover</h3>
        {/* top */}
        <div className="relative block md:flex justify-between mb-3 md:mb-8">
          {/* dropdown */}
          <div>
            <FormControl className="w-full lg:w-60 xl:w-44">
              <Select
                value={date}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                className="rounded-xl h-12"
              >
                {dateOptions.map((x) => (
                  <MenuItem value={x}>{x}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          {/* nav */}
          <div className="absolute hidden lg:flex top-2 left-1/3 mt-0.5 justify-center">
            {navLinks.map((x, index) => (
              <Button
                className={
                  index === activeIndex
                    ? "bg-gray-800 text-gray-100 rounded-3xl hover:bg-gray-800 normal-case text-sm py-1 px-3 mx-1.5 "
                    : " bg-none text-gray-400 rounded-3xl hover:text-gray-800 hover:bg-white normal-case text-sm py-1 px-3 mx-1.5"
                }
                variant="text"
                onClick={() => setActiveIndex(index)}
                key={index}
              >
                {x}
              </Button>
            ))}
          </div>
          {/* filter button */}
          <div className="relative flex justify-center items-center flex-shrink-0 ">
            <Button
              className="normal-case bg-blue-500 rounded-3xl text-white w-28 h-12  hover:bg-blue-500"
              onClick={() => setVisible(!visible)}
              endIcon={
                visible === false ? <FilterAltOutlinedIcon /> : <CloseIcon />
              }
            >
              Filter
            </Button>
          </div>
        </div>
        {/* filter */}
        <div></div>
        {/* list */}
        <div className="-mx-0 md:-mx-0">
          {/* slider */}
          <div className="block m-0 md:flex flex-wrap -mt-8 -mx-4 mb-0 overflow-visible pb-16">
            {bids.map((x, index) => (
              <Card
                className="mt-8 mx-4 flex-25 max-w-1/4"
                // className="max-w-full m-0 md:mt-8 md:mx-4 md:flex-50 md:max-w-1/2 lg:flex-33 lg:max-w-1/3 xl:flex-25 xl:max-w-1/4"
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
