import bgShadow from "../assets/images/bg-shadow.png";
import mainbanner from "../assets/images/banner-main.png";

const Hero = ({ handleAddCoins }) => {
  return (
    <section
      className="w-full h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] bg-black bg-cover bg-center rounded-none lg:rounded-2xl flex flex-col items-center justify-center text-center text-white px-4 sm:px-6"
      style={{
        backgroundImage: `url('${bgShadow}')`,
      }}
    >
      {/* Logo */}
      <img
        src={mainbanner}
        alt="Brand Logo"
        className="w-40 sm:w-52 md:w-64 mb-4"
      />

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 sm:mt-6">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>

      {/* Subheading */}
      <h3 className="text-sm sm:text-base md:text-lg font-medium mt-2 sm:mt-4">
        Beyond Boundaries Beyond Limits
      </h3>

      {/* Button */}
      <div className="border border-[#E7FE29] flex items-center p-2 rounded-2xl mt-4 sm:mt-6">
        <button
          onClick={handleAddCoins}
          className="text-sm sm:text-base md:text-md px-4 py-2 sm:px-6 sm:py-3 bg-[#E7FE29] text-gray-900 cursor-pointer rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Claim Free Credit
        </button>
      </div>
    </section>
  );
};

export default Hero;
