import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";
import Banner from "./Banner";
import Qualities from "./Qualities";
import Gallery from "./Gallery";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  // console.log(coffees);
  return (
    <div>
      <Banner></Banner>
      <Qualities></Qualities>

      {/* cards section */}
      <div className="coffee-card">
        <div className="w-10/12 mx-auto my-16">
          <div className="text-center space-y-4">
            <p className="font-poppins">-- Sip & Savor --</p>
            <h1 className="font-rancho text-4xl font-bold text-orange-950">
              Our Popular Products
            </h1>
            <Link
              to="/addCoffee"
              className="btn bg-[#E3B577] rounded-none border-orange-950 font-rancho text-xl"
            >
              <button>Add Coffee</button>
            </Link>
          </div>
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

      {/* Gallery */}
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
