import coin from "../assets/images/coin.png";
import logo from "../assets/images/logo.png";

const Navbar = ({ coins }) => {
  return (
    <div className="flex justify-between items-center pt-6 sticky top-0 backdrop-blur-2xl">
      <img src={logo} alt="logo" />
      <div>
        <ul className="flex text-gray-600 font-medium items-center space-x-6 ">
          <li className="cursor-pointer hover:text-gray-900">Home</li>
          <li className="cursor-pointer hover:text-gray-900">Fixture</li>
          <li className="cursor-pointer hover:text-gray-900">Team</li>
          <li className="cursor-pointer hover:text-gray-900">Schedules</li>
          <li className="flex items-center gap-1 border border-gray-100 px-4 py-2 font-bold rounded-lg cursor-crosshair hover:bg-[#E7FE29] ">
            <img className="w-5" src={coin} alt="" />
            <span>{coins}</span>Coin
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
