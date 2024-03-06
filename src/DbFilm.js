// DbFilm.js

// Import the axios library for making HTTP requests
import axios from "axios";

// Function to fetch a random movie from the OMDBAPI
const fetchRandomMovie = async () => {
  try {
    // Make a request to the OMDBAPI to get a random movie
    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        s: "kill",
        page: 50,
        apikey: "8683c210",
      },
    });
    // const response = await axios.get("http://www.omdbapi.com/", {
    //   params: {
    //     apikey: "8683c210",
    //     type: "movie", // Search for movies only
    //     r: "json", // Response format
    //   },
    // });

    // Get a random movie from the response
    console.log(response.data);
    const randomIndex = Math.floor(Math.random() * response.data.Search.length);
    const randomMovie = response.data.Search[randomIndex];
    console.log("Pute");
    return randomMovie;
  } catch (error) {
    console.error("Error fetching random movie:", error);
    return null; // Return null in case of an error
  }
};

// Export the fetchRandomMovie function
export default fetchRandomMovie;
