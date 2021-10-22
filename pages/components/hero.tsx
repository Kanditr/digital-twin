import Link from "next/link";
import Button from "@mui/material/Button";

const items = [
  {
    title: "the creator network®",
    creator: "Enrico Cole",
    currency: "1.00 ETH",
    price: "$3,618.36",
    avatar: "images/content/avatar-creator.jpg",
    image: "/images/content/video-preview.jpg",
    image2x: "/images/content/video-preview@2x.jpg",
  },
  // {
  //   title: "Marco carrillo®",
  //   creator: "Enrico Cole",
  //   currency: "2.00 ETH",
  //   price: "$2,477.92",
  //   avatar: "/images/content/avatar-creator.jpg",
  //   image: "/images/content/video-preview.jpg",
  //   image2x: "/images/content/video-preview@2x.jpg",
  // },
];

export default function Hero() {
  return (
    // section
    <div className="pt-8 md:pt-16 xl:pt-32">
      {/* container */}
      <div className="w-full max-w-7xl m-auto py-0 px-2 lg:px-16">
        {/* head */}
        <div className="max-w-screen-sm mt-0 mx-auto mb-20 lg:mb-28 text-center">
          <div className="mb-2 text-sm md:text-base">
            Create, explore, & collect digital art NFTs.
          </div>
          <h2 className="mb-6 text-2xl md:text-4xl">
            The new creative economy.
          </h2>
          <Link href="/">
            <Button
              variant="outlined"
              className="rounded-full font-sans normal-case"
              // style={{ color: "#111111" }}
            >
              Start your search
            </Button>
          </Link>
        </div>
        {/* wrapper */}
        <div className="relative my-0 mx-3">
          {/* row */}
          <div className="block items-start lg:flex">
            {/* image */}
            <div className="flex-grow max-w-3xl my-0 mx-auto">
              {items.map((x, index) => (
                <div className="relative" key={index}>
                  <img
                    srcSet={`${x.image2x} 2x`}
                    src={x.image}
                    alt="Video preview"
                    className="w-full rounded-2xl"
                  />
                </div>
              ))}
            </div>
            {/* details */}
            <div className="flex-shrink-0 w-64 ml-16 pb-24">
              <h1>Gun</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
