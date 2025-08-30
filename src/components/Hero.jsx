import bgShadow from "../assets/images/bg-shadow.png";
import mainbanner from "../assets/images/banner-main.png";

const Hero = ({ handleAddCoins }) => {
  return (
    <section
      className="w-full h-[60vh] bg-black bg-cover bg-center rounded-2xl flex flex-col items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url('${bgShadow}')`, // Replace with your image path
      }}
    >
      {/* Logo */}
      <img src={mainbanner} alt="Brand Logo" className="w-64  mb-4" />

      {/* Heading */}
      <h1 className="text-4xl font-bold mt-6">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <h3 className="text-lg font-medium mt-6 m6-8">
        Beyond Boundaries Beyond Limits
      </h3>

      {/* Button */}
      <div className="border-1 border-[#E7FE29] flex items-center p-2 rounded-2xl mt-6">
        <button
          onClick={handleAddCoins}
          className="text-md px-4 py-3 bg-[#E7FE29] text-gray-900 cursor-pointer rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Claim Free Credit
        </button>
      </div>
    </section>
  );
};

export default Hero;
