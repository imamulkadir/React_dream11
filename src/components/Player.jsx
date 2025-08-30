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
      <div className="container mx-auto px-2 sm:px-0">
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
      </div>
    );
  }
  return (
    <div className="border border-gray-100 w-full sm:w-[300px] md:w-[380px] lg:w-[440px] p-4 rounded-lg flex flex-col items-center gap-3">
      {/* Player Image */}
      <img
        className="mb-2 rounded-lg w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover"
        src={playerImg}
        alt={name}
      />

      {/* Player Name */}
      <div className="w-full flex items-baseline gap-2">
        <FaUser className="text-xl" />
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold">{name}</h1>
      </div>

      {/* Country & Role */}
      <div className="w-full flex justify-between border-b border-gray-300 pb-4">
        <div className="flex items-center gap-2 text-gray-500">
          <FaFlag />
          {country}
        </div>
        <p className="bg-[#F3F3F3] px-3 py-1 rounded-lg text-sm sm:text-base font-normal">
          {role}
        </p>
      </div>

      {/* Ratings */}
      <h2 className="w-full text-sm sm:text-base font-semibold">Ratings</h2>
      <div className="w-full flex justify-between text-sm sm:text-base">
        <p>{battingType}</p>
        <p className="text-gray-500">{bowlingType}</p>
      </div>

      {/* Price & Button */}
      <div className="w-full flex items-center justify-between">
        <p className="font-bold text-sm sm:text-base">Price: ${biddingPrice}</p>
        <button
          onClick={() => handleChoosePlayer(player)}
          className="text-sm sm:text-xs sm:font-bold sm:text-gray-600 p-2 rounded-lg border-2 border-[#f3f3f3] hover:border-[#E7FE29] cursor-pointer"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default Player;
