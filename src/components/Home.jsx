import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";
import Banner from "./Banner";
import Qualities from "./Qualities";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  console.log(coffees);
  return (
    <div>
      <Banner></Banner>
      <Qualities></Qualities>

      {/* cards section */}
      <div>
        <div className="grid lg:grid-cols-2 gap-4 p-6">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
