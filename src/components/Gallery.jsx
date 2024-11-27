import cup1 from "../assets/cups/cup1.png";
import cup2 from "../assets/cups/cup2.png";
import cup3 from "../assets/cups/cup3.png";
import cup4 from "../assets/cups/cup4.png";
import cup5 from "../assets/cups/cup5.png";
import cup6 from "../assets/cups/cup6.png";
import cup7 from "../assets/cups/cup7.png";
import cup8 from "../assets/cups/cup8.png";
const Gallery = () => {
  return (
    <div className="w-10/12 mx-auto my-16">
      <div className="text-center space-y-4">
        <p className="font-poppins">-- Follow us Now --</p>
        <h1 className="font-rancho text-4xl font-bold text-orange-950">
          Follow us on Instagram
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
        <img className="w-full" src={cup1} alt="" />
        <img className="w-full" src={cup2} alt="" />
        <img className="w-full" src={cup3} alt="" />
        <img className="w-full" src={cup4} alt="" />
        <img className="w-full" src={cup5} alt="" />
        <img className="w-full" src={cup6} alt="" />
        <img className="w-full" src={cup7} alt="" />
        <img className="w-full" src={cup8} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
