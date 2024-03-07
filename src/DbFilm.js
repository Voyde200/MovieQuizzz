// DbFilm.js

// Import the axios library for making HTTP requests
import axios from "axios";
import randomQuestion from "./DbQuestion";

// Function to fetch a random movie from the OMDBAPI
const fetchRandomMovie = async () => {
  try {
    // Make a request to the OMDBAPI to get a random movie
    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        s: randomQuestion[2],
        apikey: "8683c210",
      },
    });
    // Get a random movie from the response
    const randomIndex = Math.floor(Math.random() * response.data.Search.length);
    const randomMovie = response.data.Search[randomIndex];
    return randomMovie;
  } catch (error) {
    console.error("Error fetching random movie:", error);
    return null; // Return null in case of an error
  }
};

// Function to fetch and log multiple random movies
const fetchAndLogRandomMovies = async (count) => {
  try {
    const fetchedTitles = []; // Array to store fetched movie titles
    for (let i = 0; i < count; i++) {
      const randomMovie = await fetchRandomMovie();
      fetchedTitles.push(randomMovie.Title); // Push the title to the array
    }
    console.log("Fetched Titles:", fetchedTitles); // Log the array of titles
  } catch (error) {
    console.error("Error fetching random movies:", error);
  }
};

// Export the fetchAndLogRandomMovies function
export default fetchAndLogRandomMovies;

// Call the function to fetch and log two random movies with the keyword "kill"
fetchAndLogRandomMovies(3); // Fetch three movies instead of two
