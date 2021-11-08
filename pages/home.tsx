import type { NextPage } from "next";
import Hero from "../components/hero";
import Discover from "../components/discover";
import Header from "../components/header";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Discover />
      <Footer />
    </div>
  );
};

export default Home;
