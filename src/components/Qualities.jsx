import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";

const Qualities = () => {
  return (
    <div className="bg-[#ECEAE3] p-6">
      <div className="w-10/12 mx-auto lg:flex space-y-4 justify-between items-center gap-8">
        <div className="space-y-4">
          <img className="h-12" src={icon1} alt="" />
          <h3 className="font-bold font-rancho text-2xl lg:text-4xl">
            Awesome Aroma
          </h3>
          <p className="font-poppins">
            Experience the invigorating scent of our coffee.
          </p>
        </div>
        <div className="space-y-4">
          <img className="h-12" src={icon2} alt="" />
          <h3 className="font-bold font-rancho text-2xl lg:text-4xl">
            High Quality
          </h3>
          <p className="font-poppins">
            Unlock the full flavor potential of our expertly roasted beans.
          </p>
        </div>
        <div className="space-y-4">
          <img className="h-12" src={icon3} alt="" />
          <h3 className="font-bold font-rancho text-2xl lg:text-4xl">
            Pure Grades
          </h3>
          <p className="font-poppins">
            Enjoy the perfect blend of taste and nutrition in every cup.
          </p>
        </div>
        <div className="space-y-4">
          <img className="h-12" src={icon4} alt="" />
          <h3 className="font-bold font-rancho text-2xl lg:text-4xl">
            Proper Roasting
          </h3>
          <p className="font-poppins">
            Experience the perfect roast that brings out the best flavor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qualities;
