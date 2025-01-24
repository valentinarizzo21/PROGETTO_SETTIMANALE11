import React, { useState } from "react";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import Display from "./components/Display";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <SideBar onSearch={handleSearch} query={searchQuery} />
        <Display searchQuery={searchQuery} />
      </div>
      <Player />
    </div>
  );
};

export default App;
