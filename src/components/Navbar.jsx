import coin from "../assets/images/coin.png";
import logo from "../assets/images/logo.png";

const Navbar = ({ coins }) => {
  return (
    <div className="flex justify-between items-center pt-6 ">
      <img src={logo} alt="logo" />
      <div>
        <ul className="flex text-gray-600 font-medium items-center space-x-6 ">
          <li className="cursor-pointer hover:text-gray-900">Home</li>
          <li className="cursor-pointer hover:text-gray-900">Fixture</li>
          <li className="cursor-pointer hover:text-gray-900">Team</li>
          <li className="cursor-pointer hover:text-gray-900">Schedules</li>
          <li className="flex items-center gap-1 border border-gray-100 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-50">
            <span>{coins}</span>Coin
            <img className="w-5" src={coin} alt="" />
          </li>
        </ul>
      </div>
    </div>
    // <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md mt-4">
    //   {/* <nav className="bg-white shadow-sm"> */}
    //   <div className="container mx-auto px-4 py-3 flex justify-between items-center">
    //     {/* Brand Logo */}
    //     <div className="flex items-center space-x-2">
    //       <img
    //         src={logo}
    //         alt="Brand Logo"
    //         className="w-10 h-10 object-contain"
    //       />
    //       <span className="font-bold text-xl">Brand</span>
    //     </div>

    //     {/* Nav Items */}
    //     <ul className="flex items-center space-x-6 font-medium text-gray-700">
    //       <li className="cursor-pointer hover:text-gray-900">Home</li>
    //       <li className="cursor-pointer hover:text-gray-900">Fixture</li>
    //       <li className="cursor-pointer hover:text-gray-900">Teams</li>
    //       <li className="cursor-pointer hover:text-gray-900">Schedules</li>
    //       <li className="flex items-center gap-1 border border-gray-100 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-50">
    //         <Coins className="w-4 h-4 text-yellow-500" />
    //         <span>0 Coin</span>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default Navbar;
