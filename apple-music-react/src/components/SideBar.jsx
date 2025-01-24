import React, { useState } from "react";
import { assets } from "../assets/assets";

const SideBar = ({ onSearch, query }) => {
  const [inputValue, setInputValue] = useState(query);

  const handleSearchChange = (event) => {
    setInputValue(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[45%] rounded-lg flex flex-col justify-start p-6 space-y-6">
        <div className="flex justify-start w-[300px]">
          <p className="text-5xl font-semibold"> Music</p>
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="Cerca"
            className="text-lg font-semibold text-gray-300"
          >
            Search:
          </label>
          <input
            type="text"
            id="Cerca"
            value={inputValue}
            onChange={handleSearchChange}
            className="px-4 py-2 border rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Search..."
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 pl-8 cursor-pointer  hover:text-[#f1a7c0] transition-colors">
            <img className="w-6" src={assets.home_icon} alt="Home" />
            <p className="font-bold">Home</p>
          </div>
          <div className="flex items-center gap-3 pl-8 cursor-pointer  hover:text-[#f1a7c0] transition-colors">
            <img className="w-6" src={assets.bell_icon} alt="Novità" />
            <p className="font-bold">Novità</p>
          </div>
          <div className="flex items-center gap-3 pl-8 cursor-pointer  hover:text-[#f1a7c0] transition-colors">
            <img className="w-6" src={assets.search_icon} alt="Radio" />
            <p className="font-bold">Radio</p>
          </div>
        </div>
      </div>

      <div className="bg-[#121212] h-[55%] rounded-lg">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="Icona Libreria" />
            <p className="font-semibold text-white">La tua libreria</p>
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1 className="text-white">Crea la tua prima Playlist</h1>
          <p className="font-light text-gray-400">
            Aggiungi i tuoi brani preferiti
          </p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 hover:bg-[#ea556a] transition-colors cursor-pointer">
            Crea Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1 className="text-white">Cerca qualche Podcast</h1>
          <p className="font-light text-gray-400">
            Ti terremo aggiornato sui nuovi episodi
          </p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 hover:bg-[#ea556a] transition-colors cursor-pointer">
            Cerca Podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
