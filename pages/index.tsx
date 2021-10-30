import type { NextPage } from "next";
import Hero from "../components/hero";
import Discover from "../components/discover";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Discover />
    </div>
  );
};

export default Home;
