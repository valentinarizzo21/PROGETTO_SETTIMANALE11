import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold ">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-gray-700 transition duration-200"
            src={assets.arrow_left}
            alt="Back"
          />
          <img
            onClick={() => navigate(+1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-gray-700 transition duration-200"
            src={assets.arrow_right}
            alt="Forward"
          />
        </div>
        <div className="flex items-center justify-center bg-[#242424] w-[45vw]">
          <p className="appleIcon text-4xl"></p>
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white hover:bg-[#ea556a] text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer transition duration-200">
            Esplora Premium
          </p>
          <p className="bg-[#ea556a] py-1 px-3 rounded-2xl text-[15px] cursor-pointer hover:bg-gray-700 transition duration-200">
            Accedi
          </p>
          <p className="bg-[#ea556a] text-black w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:text-[#f1a7c0] transition duration-200">
            V
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4 ">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer hover:bg-[#ea556a] transition duration-200">
          All
        </p>
        <p className="bg-black py-1 px-4 rounded-2xl cursor-pointer hover:bg-gray-700 transition duration-200">
          Music
        </p>
        <p className="bg-black py-1 px-4 rounded-2xl cursor-pointer hover:bg-gray-700 transition duration-200">
          Podcast
        </p>
      </div>
    </>
  );
};

export default NavBar;
