import React, { useState, useEffect } from "react";
import fetchRandomMovie from "./DbFilm";

function App() {
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    // Fetch a random movie when the component mounts
    fetchRandomMovie().then((movie) => {
      console.log(movie);
      console.log("Décapute");
      // setRandomMovie(movie);
    });
  }, []);

  return (
    <div id="root">
      <h1>Random Movie</h1>
      {randomMovie ? (
        <div>
          <h2>{randomMovie.Title}</h2>
          <p>Year: {randomMovie.Year}</p>
          <p>Type: {randomMovie.Type}</p>
          <img src={randomMovie.Poster} alt={randomMovie.Title} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
