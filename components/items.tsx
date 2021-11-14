import Card from "../components/card";

const Items = ({ items }: any) => {
  return (
    <div>
      {/* list */}
      <div className="flex flex-wrap -mt-8 -mx-4">
        {items.map((x: any, index: any) => (
          <Card
            className="w-full m-0 mt-8 mx-4 md:flex-50-32 md:w-50-32 xl:flex-33-32 xl:w-33-32"
            item={x}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Items;
