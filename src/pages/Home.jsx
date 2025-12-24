import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "Inception", release_date: "2010-07-16" },
    { id: 2, title: "The Dark Knight", release_date: "2008-07-18" },
    { id: 3, title: "Interstellar", release_date: "2014-11-07" },
    { id: 4, title: "Parasite", release_date: "2019-11-08" },
    { id: 5, title: "The Matrix", release_date: "1999-03-31" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="Home">
      <form onSubmit={handleSearch} className="serach-bar">
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      <div className="moviesGrid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
export default Home;
