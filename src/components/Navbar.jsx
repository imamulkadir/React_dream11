import coin from "../assets/images/coin.png";
import logo from "../assets/images/logo.png";

const Navbar = ({ coins }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center pt-4 sm:pt-6 pb-4 sm:pb-0 sticky top-0 backdrop-blur-2xl px-4 sm:px-8 z-50 bg-white/30">
      {/* Logo - hidden on small screens */}
      <img
        src={logo}
        alt="logo"
        className="hidden sm:block sm:w-16 mb-2 sm:mb-0"
      />

      {/* Menu */}
      <div className="w-full sm:w-auto flex flex-wrap justify-center items-center sm:justify-start gap-2 sm:gap-6">
        {/* First row items */}
        <li className="list-none cursor-pointer hover:text-gray-900 text-sm sm:text-base">
          Home
        </li>
        <li className="list-none cursor-pointer hover:text-gray-900 text-sm sm:text-base">
          Fixture
        </li>
        <li className="list-none cursor-pointer hover:text-gray-900 text-sm sm:text-base">
          Team
        </li>
        <li className="list-none cursor-pointer hover:text-gray-900 text-sm sm:text-base">
          Schedules
        </li>

        {/* Coins button */}
        <li className="list-none flex items-center gap-1 border border-gray-100 px-3 py-2 sm:px-4 sm:py-2 font-bold rounded-lg cursor-pointer hover:bg-[#E7FE29] text-sm sm:text-base w-full sm:w-auto order-last sm:order-none justify-center sm:justify-start">
          <img className="w-4 sm:w-5" src={coin} alt="" />
          <span>{coins}</span> Coin
        </li>
      </div>
    </div>
  );
};

export default Navbar;
