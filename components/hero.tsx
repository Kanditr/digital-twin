import Link from "next/link";
import Button from "@mui/material/Button";

const items = [
  {
    title: "Digital twin project®",
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
      <div className="w-full max-w-screen-xl my-0 mx-auto py-0 px-8 lg:px-10 xl:px-20">
        {/* head */}
        <div className="max-w-screen-sm mt-0 mx-auto mb-20 lg:mb-28 text-center">
          <div className="mb-2 text-sm md:text-base">
            Create, explore, & collect digital art NFTs.
          </div>
          <h2 className="mb-6 text-2xl md:text-4xl">
            The new creative economy.
          </h2>
          <Link href="/" passHref>
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
        <div className="relative my-0 mx-0">
          {items.map((x, index) => (
            // row
            <div className="block items-start lg:flex" key={index}>
              {/* image */}
              <div className="flex-grow max-w-3xl my-0 mx-auto">
                <div className="relative" key={index}>
                  <img
                    srcSet={`${x.image2x} 2x`}
                    src={x.image}
                    alt="Video preview"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              {/* details */}
              <div
                className="flex-shrink-0 
              mt-8 w-full
              md:pb-16 
              lg:w-80 lg:mt-0 lg:ml-8 lg:mx-0 lg:mb-0 lg:pb-20 
              xl:w-96 xl:ml-16 xl:pb-20
              2xl:w-96 2xl:ml-32 2xl:pb-20"
              >
                {/* subtitle */}
                <div className="text-5xl xl:text-6xl mb-6 xl:mb-10 font-semibold tracking-wider">
                  {x.title}
                </div>
                {/* wrap */}
                <div className="mb-8 py-6 px-4 xl:mb-10 xl:py-8 border-2 shadow-xl rounded-2xl text-center">
                  <div className="text-base font-medium leading-5">
                    Current Bid
                  </div>
                  <div className="text-5xl font-medium leading-tight">
                    {x.currency}
                  </div>
                  <div className="mb-6 font-semibold text-2xl text-gray-500">
                    {x.price}
                  </div>
                  <div className="text-base font-medium leading-5">
                    Auction ending in
                  </div>
                  {/* timer */}
                  <div className="flex justify-center mt-2">
                    {/* box */}
                    <div className="flex-shrink-0 w-16 mr-5">
                      <div className="text-3xl leading-tight">19</div>
                      <div className="text-base font-medium leading-5 text-gray-500">
                        Hrs
                      </div>
                    </div>
                    {/* box */}
                    <div className="flex-shrink-0 w-16 mr-5">
                      <div className="text-3xl leading-tight">24</div>
                      <div className="text-base font-medium leading-5 text-gray-500">
                        Min
                      </div>
                    </div>
                    {/* box */}
                    <div className="flex-shrink-0 w-16">
                      <div className="text-3xl leading-tight">19</div>
                      <div className="text-base font-medium leading-5 text-gray-500">
                        Sec
                      </div>
                    </div>
                  </div>
                </div>
                {/* btns */}
                <div>
                  <Link href="/" passHref>
                    <Button
                      variant="contained"
                      className="flex flex-col mb-2 w-full rounded-full font-sans normal-case h-12 bg-blue-500"
                      size="large"
                    >
                      Place a bid
                    </Button>
                  </Link>
                  <Link href="/" passHref>
                    <Button
                      variant="outlined"
                      className="flex flex-col mb-2 w-full rounded-full font-sans normal-case h-12"
                      size="large"
                    >
                      View item
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
