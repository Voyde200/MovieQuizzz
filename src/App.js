import React, { useState, useEffect } from "react";
import fetchRandomMovie from "./DbFilm";
import randomQuestion from "./DbQuestion";
import fetchedTitles from "./DbFilm";
function App() {
  const [randomMovie, setRandomMovie] = useState(0);

  useEffect(() => {
    // Fetch a random movie when the component mounts
    fetchRandomMovie(3).then((movie) => {
      console.log("fetched movie", movie);
      setRandomMovie(movie);
    });
  }, []);

  const WrongMovies = () => {
    if (typeof randomMovie == "object") {
      const allMovies = randomMovie.map((movie, index) => {
        // HTML code created for each movie found
        return <h2 key={index}>{movie}</h2>;
      });
      return <div>{allMovies}</div>;
    }
    return <div></div>;
  };
  return (
    <div id="root">
      <h1>Random Movie</h1>
      <div>
        <h2>{randomQuestion[0]}</h2>
        <br />
        <h2>{randomQuestion[1]}</h2>

        <WrongMovies />
      </div>
    </div>
  );
}

export default App;
