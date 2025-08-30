import { useEffect, useState } from "react";
import Player from "./Player";

const Players = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("/players.json") // JSON file in public folder
      .then((res) => res.json())
      //   .then((data) => console.log(data))
      .then((data) => setPlayers(data))
      .catch((err) => console.error("Error loading players:", err));
  }, []);
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Avaialble Players</h1>
        <div className="inline-flex border border-gray-300 rounded-xl overflow-hidden">
          <button className="px-6 py-2 bg-[#E7FE29] text-black font-medium">
            Available
          </button>
          <button className="px-6 py-2 bg-white text-gray-500 font-medium">
            Selected (0)
          </button>
        </div>

        {/* <div className="flex  border-1 border-gray-300 rounded-lg gap-12">
          <button className="px-4 py-2 border-2 font-medium rounded">
            Available
          </button>
          <button className="px-4 py-2 border-2 font-medium rounded">
            Selected <span>(0)</span>
          </button>
        </div> */}
      </div>
      <div className="grid md:grid-cols-3 place-items-center gap-6 mt-6">
        {players.map((player) => (
          <Player key={player.playerId} player={player}></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
