const Banner = () => {
  return (
    <div className="banner flex items-center justify-end h-96 lg:h-[750px] text-white">
      <div className="lg:w-2/4 space-y-4 p-8">
        <h1 className="text-3xl lg:text-5xl font-semibold font-rancho">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="font-poppins text-xs">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="font-rancho btn text-lg rounded-none bg-[#E3B577]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;
