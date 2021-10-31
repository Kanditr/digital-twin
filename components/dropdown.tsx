import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Icon from "./Icon";
import cn from "classnames";


const Dropdown = ({ className, value, setValue, options }: any) => {
  const [visible, setVisible] = useState(false);

  const handleClick = (value:any, index:any) => {
    setValue(value);
    setVisible(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cn("relative z-30", className)}
      >
          {/* head */}
        <div className="relative h-12 rounded-xl cursor-pointer border-2 focus:border-gray-400" onClick={() => setVisible(!visible)}>
            {/* selection */}
          <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">{value}</div>
          {/* arrow */}
          <div className="absolute flex top-1/2 right-2 justify-center items-center w-8 h-8 rounded-full border-2">
            <Icon name="arrow-bottom" size="10" />
          </div>
        </div>
        {/* body */}
        <div className={visible ? "absolute left-0 right-0 py-2 rounded-xl bg-white border-2 visible z-10" : "absolute left-0 right-0 py-2 rounded-xl hidden" }>
          {options.map((x:any, index:any) => (
            //   option / selectioned
            <div
              className={cn("py-2 px-4 cursor-pointer", {
                ["text-blue-500"]: x === value,
              })}
              onClick={() => handleClick(x, index)}
              key={index}
            >
              {x}
            </div>
          ))}
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Dropdown;