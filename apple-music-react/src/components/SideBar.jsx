import React from "react";
import { assets } from "../assets/assets";
const SideBar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[45%] rounded-lg flex flex-col justify-start p-6 space-y-6">
        <div className="flex justify-start w-[300px]">
          <svg
            viewBox="0.5 -124.5 328 328"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            stroke="#ffffff"
            className="w-16 h-16"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g fill="#ffffff">
                <path d="M52.244 41.844c-.104-6.346 2.637-11.286 8.217-14.822-3.147-4.576-7.788-7.148-13.925-7.723-2.183-.205-4.974.311-8.369 1.561-3.652 1.354-5.708 2.027-6.164 2.027-.964 0-2.815-.569-5.558-1.716-2.737-1.144-5.072-1.716-7-1.716-3.246.053-6.266.95-9.055 2.691-2.79 1.743-5.021 4.124-6.694 7.137C1.563 33.029.5 37.502.5 42.701c0 4.68.784 9.359 2.356 14.042 1.471 4.473 3.351 8.399 5.631 11.776 2.027 3.069 3.809 5.305 5.326 6.711 2.184 2.183 4.413 3.225 6.699 3.119 1.47-.054 3.396-.599 5.781-1.642 2.23-.983 4.464-1.478 6.697-1.478 2.079 0 4.233.492 6.468 1.478 2.484 1.043 4.515 1.562 6.087 1.562 2.334-.102 4.514-1.117 6.546-3.039.707-.627 1.482-1.484 2.318-2.576a79.861 79.861 0 0 0 2.779-3.9 57.237 57.237 0 0 0 2.093-3.51 35.298 35.298 0 0 0 1.864-3.979c.251-.572.479-1.156.684-1.754.202-.598.405-1.207.608-1.832-1.877-.83-3.577-2.005-5.098-3.514-3.344-3.323-5.044-7.433-5.095-12.321zM107.421 55.75h-.369L91.599 20.436H79.464v56.977H90.04V40.512h.491l12.914 29.302h7.417l12.873-29.302h.493v36.901h10.698V20.436h-12.052zM42.654 12.982c2.69-3.381 4.035-7.021 4.035-10.922v-.779c0-.262-.026-.521-.076-.781-1.878.104-3.868.703-5.975 1.793-2.104 1.094-3.841 2.474-5.213 4.135-2.738 3.279-4.109 6.787-4.109 10.532v.739c0 .236.026.482.076.744 4.212.415 7.966-1.406 11.262-5.461zM258.534 20.436h11.887v56.978h-11.887zM306.323 29.493c7.05 0 10.778 5.427 10.778 11.271H328.5v-1.211c0-11.019-8.404-20.201-22.26-20.201-14.84 0-23.693 9.767-23.693 26.423v6.429c0 16.651 8.771 26.297 23.651 26.297 14.225 0 22.302-9.312 22.302-19.662v-1.252h-11.398c0 5.888-3.647 10.771-10.695 10.771-7.217 0-11.809-5.135-11.809-16.115v-6.424c0-10.942 4.634-16.326 11.725-16.326zM180.39 56.416c0 7.641-4.468 11.855-11.026 11.855-6.6 0-11.067-4.174-11.067-11.855v-35.98H146.49v37.65c0 12.15 8.607 20.414 22.872 20.414 14.225 0 22.873-8.264 22.873-20.414v-37.65H180.39v35.98zM231.564 44.229l-8.484-1.918c-5-1.047-7.624-3.258-7.624-6.557 0-4.381 3.565-7.137 9.307-7.137 6.476 0 9.714 3.715 10 7.723h11.068c-.123-10.061-8.525-17.073-21.029-17.073-11.845 0-21.192 6.221-21.192 17.407 0 9.684 6.56 14.189 14.43 15.905l8.402 1.96c5.657 1.294 8.526 3.174 8.526 7.053 0 4.428-3.526 7.434-10.124 7.434-7.092 0-10.823-3.758-11.149-7.975h-11.397c.167 8.057 5.495 17.449 21.974 17.449 13.854 0 22.423-6.887 22.423-18.078-.004-10.352-6.932-14.401-15.131-16.193z"></path>
              </g>
            </g>
          </svg>
        </div>

        <div className="flex flex-col space-y-2">
          <label for="Cerca" className="text-lg font-semibold text-gray-300">
            Search:
          </label>
          <input
            type="text"
            id="Cerca"
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
