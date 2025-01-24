import React from "react";
import "./style.css";
import { assets } from "../assets/assets";

const ExploreSection = () => {
  return (
    <div className="p-6">
      <div className="flex items-center">
        <h1 className="my-5 font-bold text-2xl">Esplora </h1>
        <img
          src={assets.arrow_right}
          alt="Arrow Right"
          className="w-5 h-5 ml-2"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div className="flex items-center justify-between gap-2 p-4 bg-[#242424] text-[#ea556a] rounded-lg hover:text-[#f1a7c0] cursor-pointer  ">
          <p>Esplora per genere</p>
          <img
            src={assets.arrow_right}
            alt="Arrow Right"
            className="w-5 h-5 rightArrow"
          />
        </div>
        <div className="flex items-center justify-between gap-2 p-4 bg-[#242424] text-[#ea556a] rounded-lg hover:text-[#f1a7c0] cursor-pointer">
          <p>Worldwide</p>
          <img
            src={assets.arrow_right}
            alt="Arrow Right"
            className="w-5 h-5 rightArrow"
          />
        </div>
        <div className="flex items-center justify-between gap-2 p-4 bg-[#242424] text-[#ea556a] rounded-lg hover:text-[#f1a7c0] cursor-pointer">
          <p>Video Musicali</p>
          <img
            src={assets.arrow_right}
            alt="Arrow Right"
            className="w-5 h-5 rightArrow"
          />
        </div>
        <div className="flex items-center justify-between gap-2 p-4 bg-[#242424] text-[#ea556a] rounded-lg hover:text-[#f1a7c0] cursor-pointer">
          <p>Decenni</p>
          <img
            src={assets.arrow_right}
            alt="Arrow Right"
            className="w-5 h-5 rightArrow"
          />
        </div>
        <div className="flex items-center justify-between gap-2 p-4 bg-[#242424] text-[#ea556a] rounded-lg hover:text-[#f1a7c0] cursor-pointer">
          <p>Classifiche</p>
          <img
            src={assets.arrow_right}
            alt="Arrow Right"
            className="w-5 h-5 rightArrow"
          />
        </div>
        <div className="flex items-center justify-between gap-2 p-4 bg-[#242424] text-[#ea556a] rounded-lg hover:text-[#f1a7c0] cursor-pointer">
          <p>Nuovi artisti</p>
          <img
            src={assets.arrow_right}
            alt="Arrow Right"
            className="w-5 h-5 rightArrow"
          />
        </div>
        <div className="flex items-center justify-between gap-2 p-4 bg-[#242424] text-[#ea556a] rounded-lg hover:text-[#f1a7c0] cursor-pointer">
          <p>Attività e stati d'animo</p>
          <img
            src={assets.arrow_right}
            alt="Arrow Right"
            className="w-5 h-5 rightArrow"
          />
        </div>
        <div className="flex items-center justify-between gap-2 p-4 bg-[#242424] text-[#ea556a] rounded-lg hover:text-[#f1a7c0] cursor-pointer">
          <p>Audio spaziale</p>
          <img
            src={assets.arrow_right}
            alt="Arrow Right"
            className="w-5 h-5 rightArrow"
          />
        </div>
        <div className="flex items-center justify-between gap-2 p-4 bg-[#242424] text-[#ea556a] rounded-lg hover:text-[#f1a7c0] cursor-pointer">
          <p>Hit del passato</p>
          <img
            src={assets.arrow_right}
            alt="Arrow Right"
            className="w-5 h-5 rightArrow"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
