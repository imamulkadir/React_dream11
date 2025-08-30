import { FaUser, FaFlag } from "react-icons/fa";

const Player = ({ player }) => {
  const {
    playerId,
    playerImg,
    name,
    country,
    role,
    battingType,
    bowlingType,
    biddingPrice,
  } = player;
  return (
    <div className="border-1  border-gray-100 w-full p-4 rounded-lg flex flex-col items-center gap-3">
      <img
        className="mb-2 rounded-lg w-[440px] h-[250px]"
        src={playerImg}
        alt={name}
      />
      <div className="w-[440px] space-y-4 flex items-baseline gap-2">
        <FaUser className="text-xl" />
        <h1 className="text-xl font-bold">{name}</h1>
      </div>
      <div className="w-[440px] flex justify-between border-b-1 border-gray-300 pb-4">
        <div className="flex items-center gap-2 text-gray-500">
          <FaFlag />
          {country}
        </div>
        <p className="bg-[#F3F3F3] px-4 py-1 rounded-lg font-normal">{role}</p>
      </div>
      <h2 className="w-[440px]">Ratings</h2>
      <div className="w-[440px] flex justify-between">
        <p>{battingType}</p>
        <p className="text-gray-500">{bowlingType}</p>
      </div>
      <div className="w-[440px] flex items-center justify-between">
        <p className="font-bold">price: ${biddingPrice}</p>
        <button className="text-sm p-2 rounded-lg border-2 border-[#f3f3f3] cursor-pointer  hover:border-[#E7FE29]">
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default Player;
