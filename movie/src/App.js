import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";
import AddMovie from "./AddMovie";
import Render from "./Render";

function App() {
  const APP_KEY = "596d1af268161404a8e554358d89a0e9";

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Die Hard");

  useEffect(() => {
    getMovies();
  }, [query]);

  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APP_KEY}&query=${query}`
    );
    const data = await response.json();
    setMovies(data.results);
    console.log(data.results);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    // <MovieProvider>
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="appMovie">
        {movies.map(movie => (
          <Render
            title={movie.title}
            average={movie.vote_average}
            overview={movie.overview}
            image={movie.poster_path}
          />
        ))}

        {/* <Nav />
        <MovieList />
        <AddMovie /> */}
      </div>
    </div>
    // </MovieProvider>
  );
}

export default App;
