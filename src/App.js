import React, { useState, useEffect } from "react";
import fetchRandomMovie from "./DbFilm";
import randomQuestion from "./DbQuestion";
import fetchedTitles from "./DbFilm";
import QuizView from "./QuizPage";


function App() {
  const [randomisedAnswer, setRandomisedAnswer] = useState([]);
  useEffect(() => {
    // Fetch a random movie when the component mounts
    fetchRandomMovie(3).then((movie) => {
      // Creation of the array with the 3 wrong answers
      console.log("fetched movie", movie);
      movie.push(randomQuestion[1]);
      console.log(movie);
      movie = movie.slice().sort(
        () => Math.random() - 0.5
        );
        console.log(movie);


      setRandomisedAnswer(randomisedAnswer => {for(let movieIndex=0; movieIndex < movie.length; movieIndex++){
        randomisedAnswer.push(movie[movieIndex])
      }});

      //Creation of the randomized array with the 4 answers, including the right
      console.log("Randomiser", randomisedAnswer);
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
    <section>
      <div>{randomisedAnswer} </div>
      < QuizView  AnswerQuiz={randomisedAnswer} />;
    </section>
 );

}

export default App;