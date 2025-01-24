import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import AlbumItem from "./AlbumItem";
import PlaylistSection from "./PlaylistSection";
import NovitaSection from "./NovitaSection";
import ExploreSection from "./ExploreSection";

const DisplayHome = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getTheWeekndSongs = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=theweeknd"
      );
      if (!response.ok) {
        throw new Error("Network response non andata a buon fine");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getTheWeekndSongs();
  }, []);

  return (
    <div>
      <NavBar />
      <NovitaSection />
      <PlaylistSection />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">The Weeknd</h1>
        <div className="flex overflow-auto">
          {error && <p>Errore: {error}</p>}

          {data ? (
            data.data.map((item) => (
              <AlbumItem
                key={item.id}
                name={item.title}
                desc={item.artist.name}
                id={item.id}
                image={item.album.cover_medium}
              />
            ))
          ) : (
            <p>Caricamento in corso...</p>
          )}
        </div>
      </div>
      <ExploreSection />
    </div>
  );
};

export default DisplayHome;
