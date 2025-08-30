import { FaUser, FaFlag, FaTrash } from "react-icons/fa";

const Player = ({ player, handleChoosePlayer, view, handleRemovePlayer }) => {
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
  if (view === "selected") {
    return (
      <div className="flex items-center justify-between border border-gray-300 rounded-lg p-3 w-full shadow-sm">
        <div className="flex items-center">
          {/* Left: Player image */}
          <img
            src={player.playerImg}
            alt={player.name}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            {/* Middle: Name and batting type */}
            <div className="flex-1 mx-4">
              <h1 className="text-lg font-bold">{player.name}</h1>
              <p className="text-gray-500">{player.battingType}</p>
            </div>
          </div>
        </div>

        {/* Right: Delete icon */}
        <button
          onClick={() => handleRemovePlayer(playerId)}
          className="text-red-500 hover:text-red-700 transition-colors cursor-pointer p-4"
        >
          <FaTrash size={20} />
        </button>
      </div>
    );
  }
  return (
    <div className="border-1 border-gray-100 w-full p-4 rounded-lg flex flex-col items-center gap-3">
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
        <button
          onClick={() => handleChoosePlayer(player)}
          className="text-sm p-2 rounded-lg border-2 border-[#f3f3f3] cursor-pointer  hover:border-[#E7FE29]"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default Player;
