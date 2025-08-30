import { useEffect, useState } from "react";
import Player from "./Player";
import toast from "react-hot-toast";

const Players = ({ coins, setCoins }) => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [view, setView] = useState("available");
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/players.json") // JSON file in public folder
      .then((res) => res.json())
      //   .then((data) => console.log(data))
      .then((data) => setPlayers(data))
      .catch((err) => console.error("Error loading players:", err));
  }, []);

  const handleChoosePlayer = (player) => {
    // Check if player already selected
    if (selectedPlayers.some((p) => p.playerId === player.playerId)) {
      toast.error(`${player.name} is already selected!`, { duration: 2000 });
      return;
    }

    // Check if user has enough coins
    if (coins === 0) {
      toast.error("You have 0 coins! Please claim free credit.", {
        duration: 2000,
      });
      return;
    }

    if (coins < player.biddingPrice) {
      toast.error(
        `Not enough coins to select ${player.name}. Please claim free credit.`,
        { duration: 2000 }
      );
      return;
    }

    // Check max 6 players
    if (selectedPlayers.length >= 6) {
      toast.error(`Maximum number of players selected!`, { duration: 2000 });
      return;
    }

    // Deduct player price
    setCoins(coins - player.biddingPrice);

    // Add player
    setSelectedPlayers([...selectedPlayers, player]);

    toast.success(`Congratulations! ${player.name} selected! Coins updated.`, {
      duration: 2000,
    });
  };

  const displayedPlayers =
    view === "available"
      ? players
      : selectedPlayers.length > 0
      ? selectedPlayers
      : [];

  return (
    <div className="mb-80 ">
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-bold">
          {view === "selected"
            ? `Selected Players (${selectedPlayers.length}/6)`
            : "Avaialble Players"}
        </h1>
        <div className="inline-flex border border-gray-300 rounded-xl overflow-hidden">
          <button
            onClick={() => setView("available")}
            className={`px-6 py-2 font-medium cursor-pointer ${
              view === "available"
                ? "bg-[#E7FE29] text-black"
                : "bg-white text-gray-500"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setView("selected")}
            className={`px-6 py-2 font-medium cursor-pointer ${
              view === "selected"
                ? "bg-[#E7FE29] text-black"
                : "bg-white text-gray-500"
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>
          {/* <button className="px-6 py-2 bg-[#E7FE29] text-black font-medium">
            Available
          </button> */}
          {/* <button className="px-6 py-2 bg-white text-gray-500 font-medium">
            Selected (0)
          </button> */}
        </div>
      </div>
      {/* Players Grid */}
      {displayedPlayers.length > 0 ? (
        <div
          className={`grid gap-4 mt-6 ${
            view === "selected"
              ? "grid-cols-1"
              : "md:grid-cols-3 place-items-center"
          }`}
        >
          {displayedPlayers.map((player) => (
            <Player
              key={player.playerId}
              player={player}
              handleChoosePlayer={handleChoosePlayer}
              view={view} // pass view so Player knows if it’s selected
              handleRemovePlayer={(playerId) => {
                const removedPlayer = selectedPlayers.find(
                  (p) => p.playerId === playerId
                );
                if (removedPlayer) {
                  setSelectedPlayers((prev) =>
                    prev.filter((p) => p.playerId !== playerId)
                  );
                  toast.error(`${removedPlayer.name} has been removed!`, {
                    duration: 2000,
                  });
                }
              }}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-6">
          {view === "selected" ? "No player selected" : "No players available"}
        </p>
      )}
      {/* <div className="grid md:grid-cols-3 place-items-center gap-6 mt-6">
        {players.map((player) => (
          <Player
            key={player.playerId}
            player={player}
            handleChoosePlayer={handleChoosePlayer}
          ></Player>
        ))}
      </div> */}
    </div>
  );
};

export default Players;
