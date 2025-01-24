import React from "react";
import { assets } from "../assets/assets";

const PlaylistSection = () => {
  return (
    <div className="mb-4">
      <div className="flex items-center">
        <h1 className="my-5 font-bold text-2xl">Playlist </h1>
        <img
          src={assets.arrow_right}
          alt="Arrow Right"
          className="w-5 h-5 ml-2"
        />
      </div>
      <div className="flex overflow-auto">
        <div className="min-w-[280px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
          <img
            src="src/assets/assets_given/images/2a.png"
            className="w-full h-[250px] object-cover rounded-t-lg"
          />
          <div className="p-3 text-white">
            <h3 className="font-semibold text-lg overflow-hidden">
              Prologo con Abuelo
            </h3>
          </div>
        </div>
        <div className="min-w-[280px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
          <img
            src="src/assets/assets_given/images/2b.png"
            className="w-full h-[250px] object-cover rounded-t-lg"
          />
          <div className="p-3 text-white">
            <h3 className="font-semibold text-lg overflow-hidden">
              The Wanderer
            </h3>
          </div>
        </div>
        <div className="min-w-[280px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
          <img
            src="src/assets/assets_given/images/2c.png"
            className="w-full h-[250px] object-cover rounded-t-lg"
          />
          <div className="p-3 text-white">
            <h3 className="font-semibold text-lg overflow-hidden">
              Michael Bublé & Carly Pearce
            </h3>
          </div>
        </div>
        <div className="min-w-[280px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
          <img
            src="src/assets/assets_given/images/2d.png"
            className="w-full h-[250px] object-cover rounded-t-lg"
          />
          <div className="p-3 text-white">
            <h3 className="font-semibold text-lg overflow-hidden">
              Stephan Moccio:The Zane Lowe Interview
            </h3>
          </div>
        </div>
        <div className="min-w-[280px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
          <img
            src="src/assets/assets_given/images/2e.png"
            className="w-full h-[250px] object-cover rounded-t-lg"
          />
          <div className="p-3 text-white">
            <h3 className="font-semibold text-lg overflow-hidden">
              Chart Spotlight: Julia Michaels
            </h3>
          </div>
        </div>
        <div className="min-w-[280px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
          <img
            src="src/assets/assets_given/images/2f.png"
            className="w-full h-[250px] object-cover rounded-t-lg"
          />
          <div className="p-3 text-white">
            <h3 className="font-semibold text-lg overflow-hidden">
              Karri & Travis Mills
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistSection;
