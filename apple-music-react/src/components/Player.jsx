import React from "react";
import { assets } from "../assets/assets";

const Player = () => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src="" alt="Album" />
        <div>
          <p>The Weeknd</p>
          <p>Timeless</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt="Shuffle"
            role="button"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt="Previous"
            role="button"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.play_icon}
            alt="Play"
            role="button"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt="Next"
            role="button"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.loop_icon}
            alt="Loop"
            role="button"
          />
        </div>
        <div className="flex items-center gap-5">
          <p>{formatTime(66)}</p>
          <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full">
            <hr className="h-1 border-none w-2/3 bg-green-800 rounded-full" />
          </div>
          <p>{formatTime(200)}</p>
        </div>
        <div className="hidden lg:flex items-center gap-2 opacity-75">
          <img className="w-4" src={assets.plays_icon} alt="Plays" />
          <img className="w-4" src={assets.mic_icon} alt="Mic" />
          <img className="w-4" src={assets.queue_icon} alt="Queue" />
          <img className="w-4" src={assets.speaker_icon} alt="Speaker" />
          <img className="w-4" src={assets.volume_icon} alt="Volume" />
          <input
            type="range"
            min="0"
            max="100"
            className="w-20 h-1 rounded cursor-pointer"
            onChange={(e) => console.log(`Volume: ${e.target.value}`)}
          />
          <img
            className="w-4"
            src={assets.mini_player_icon}
            alt="Mini Player"
          />
          <img className="w-4" src={assets.zoom_icon} alt="Zoom" />
        </div>
      </div>
    </div>
  );
};

export default Player;
