import React, { useState, useEffect } from "react";
import fetchRandomMovie from "./DbFilm";
import randomQuestion from "./DbQuestion";
import fetchedTitles from "./DbFilm";

function App() {
  const [randomMovie, setRandomMovie] = useState(0);

  useEffect(() => {
    // Fetch a random movie when the component mounts
    fetchRandomMovie(3).then((movie) => {
      // Creation of the array with the 3 wrong answers
      console.log("fetched movie", movie);
      setRandomMovie(movie);
      var RandomisedAnswer = movie;
      RandomisedAnswer.push(randomQuestion[1]);
      RandomisedAnswer = RandomisedAnswer.slice().sort(
        () => Math.random() - 0.5
      );
      //Creation of the randomized array with the 4 answers, including the right
      console.log("Randomiser", RandomisedAnswer);
    });
  }, []);

  // const WrongMovies = () => {
  //   if (typeof randomMovie == "object") {
  //     const allMovies = randomMovie.map((movie, index) => {
  //       // HTML code created for each movie found
  //       return <h2 key={index}>{movie}</h2>;
  //     });
  //     return <div>{allMovies}</div>;
  //   }
  //   return <div></div>;
  // };
  return (
    <div id="root">
      <h1>Random Movie</h1>
      <div>
        {/* Output of the question */}
        <h2>{randomQuestion[0]}</h2>
        <br />
        {/* <WrongMovies /> */}
      </div>
    </div>
  );
}

export default App;
