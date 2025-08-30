import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import Players from "./components/Players";

function App() {
  const [coins, setCoins] = useState(0);

  const handleAddCoins = () => {
    const newCoins = coins + 600000;
    setCoins(newCoins);
    toast.success("Coins added! 🎉", {
      duration: 2000, // 2 seconds
    });
  };
  return (
    <div className="font-sora space-y-10 max-w-[1440px] mx-auto ">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar coins={coins}></Navbar>
      <Hero handleAddCoins={handleAddCoins}></Hero>
      <Players></Players>
    </div>
  );
}

export default App;
