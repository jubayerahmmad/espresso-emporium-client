import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  // console.log(coffee);
  const { name, photo, category, quantity, supplier, taste, details } = coffee;
  return (
    <div className="my-6 lg:w-10/12 mx-auto space-y-4">
      <Link to="/" className="text-2xl font-rancho flex items-center gap-2">
        <FaArrowAltCircleLeft></FaArrowAltCircleLeft> Back to Home
      </Link>
      <div className="bg-[#F4F3F0] p-8 lg:p-16 lg:flex items-center gap-4">
        <div className="lg:w-1/2">
          <img className="w-1/2 mx-auto" src={photo} alt="" />
        </div>
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-4xl font-rancho font-bold text-orange-950">
            {name}
          </h1>
          <p>
            <span className="font-bold">Supplier:</span> {supplier}
          </p>
          <p>
            <span className="font-bold">Category:</span> {category}
          </p>
          <p>
            <span className="font-bold">Taste:</span> {taste}
          </p>
          <p>
            <span className="font-bold">Details:</span> {details}
          </p>
          <p>
            <span className="font-bold">Price:</span> ${quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
