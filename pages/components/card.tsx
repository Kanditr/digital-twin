import { Button } from "@mui/material";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import cn from "classnames";

const Card = ({ className, item }: any) => {
  // isFavorite
  const [visible, setVisible] = useState(false);

  return (
    <div className={cn("flex flex-col group", className)}>
      {/* preview */}
      <div className="relative rounded-2xl overflow-hidden w-full ">
        {/* img */}
        <div className=" transform transition duration-700 group-hover:scale-110">
          <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Card" />
        </div>
        {/* control */}
        <div className="transition-all opacity-0 hover:opacity-100 hover:visible duration-300 absolute top-0 left-0 w-full h-full rounded-2xl">
          {/* category & status */}
          <div></div>
          {/* favorite */}
          <IconButton
            style={{ color: "#EF466F" }}
            onClick={() => setVisible(!visible)}
          >
            {visible === true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          {/* place a bid */}
          <Button className="bg-blue-500 text-white normal-case rounded-3xl px-5 hover:bg-blue-600">
            Purchase
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;