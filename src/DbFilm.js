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
        page: "3", // Not working for some reason
        apikey: "8683c210",
      },
    });
    // Get a random movie from the response
    console.log(response.data);
    const randomIndex = Math.floor(Math.random() * response.data.Search.length);
    const randomMovie = response.data.Search[randomIndex];
    return randomMovie;
    console.log(randomMovie);
    console.log("ordure");
  } catch (error) {
    console.error("Error fetching random movie:", error);
    return null; // Return null in case of an error
  }
};

// Export the fetchRandomMovie function
export default fetchRandomMovie;
