import type { NextPage } from "next";
import Hero from "../components/hero";
import Discover from "../components/discover";
import Header from "../components/header";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Discover />
    </div>
  );
};

export default Home;
