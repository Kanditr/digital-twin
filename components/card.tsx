import { Button } from "@mui/material";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import cn from "classnames";
import Link from "next/link";
import Icon from "./Icon";

const Card = ({ className, item }: any) => {
  // isFavorite
  const [visible, setVisible] = useState(false);

  return (
    <div className={cn("flex flex-col group", className)}>
      {/* preview */}
      <div className="relative overflow-hidden w-full ">
        {/* img */}
        <div className="flex-grow max-w-full my-0 mx-auto transform transition duration-700 group-hover:scale-110">
          <div className="relative">
            <img
              srcSet={`${item.image2x} 2x`}
              src={item.image}
              alt="Card"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
        {/* control */}
        <div className="transition-all opacity-0 hover:opacity-100 hover:visible duration-300 absolute top-0 left-0 w-full h-full">
          {/* category & status */}
          <div></div>
          {/* favorite */}
          <button
            className="absolute top-2 right-2 w-8 h-8 px-1.5 rounded-full bg-white items-center"
            onClick={() => setVisible(!visible)}
          >
            {visible === false ? (
              <Icon
                name="heart"
                size="20"
                fill="#EF466F"
                backgroundColor="red"
              />
            ) : (
              <Icon
                name="heart-fill"
                size="20"
                fill="#EF466F"
                backgroundColor="red"
              />
            )}
          </button>
          {/* purchase */}
          <Link href="/" passHref scroll={false}>
            <button className="absolute rounded-3xl px-5 h-10 w-36 left-1/2-72 bottom-2 bg-blue-500 hover:bg-blue-600 transition-all text-white">
              Purchase
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
