import logo from "../assets/logo1.png";

const Header = () => {
  return (
    <div className="flex gap-4 items-center justify-center p-4 text-white bg">
      <img className="w-12 h-12" src={logo} alt="logo" />
      <h1 className="text-4xl lg:text-6xl font-semibold font-rancho">
        Espresso Emporium
      </h1>
    </div>
  );
};

export default Header;
