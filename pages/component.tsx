import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <header className="relative p-6 border-b">
        <div className="flex">
          <h1>Hi</h1>
          <div className="flex-1 px-2">
            <p>Yo</p>
          </div>
          <div className="flex px-2">
            <p>link</p>
          </div>
          <div className="flex">
            <p>link</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
