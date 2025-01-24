import React from "react";

const NovitaSection = () => {
  return (
    <div className="mb-4">
      <h1 className="my-5 font-bold text-2xl">Novità:</h1>
      <div className="flex overflow-auto">
        <div className="min-w-[500px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
          <div className="p-3 text-white">
            <p className="text-sm">NUOVA STAZIONE RADIO</p>
            <p className="font-light text-lg overflow-hidden">
              Rilassati al restopensiamo noi.
            </p>
          </div>
          <img
            src="src/assets/assets_given/images/1a.png"
            className="w-full h-[250px] object-cover rounded-t-lg"
          />
        </div>
        <div className="min-w-[500px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
          <div className="p-3 text-white">
            <p className="text-sm">NUOVA STAZIONE RADIO</p>
            <p className="font-light text-lg overflow-hidden">
              Ecco la nuova casa della musica latina
            </p>
          </div>
          <img
            src="src/assets/assets_given/images/1b.png"
            className="w-full h-[250px] object-cover rounded-t-lg"
          />
        </div>
        <div className="min-w-[500px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
          <div className="p-3 text-white">
            <p className="text-sm">NUOVA STAZIONE RADIO</p>
            <p className="font-light text-lg overflow-hidden">
              Un pò di Clubbing vibes!
            </p>
          </div>
          <img
            src="src/assets/assets_given/images/1c.png"
            className="w-full h-[250px] object-cover rounded-t-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default NovitaSection;
