import MovieCard from "../components/MovieCard";
import { useState, useEffect, use } from "react";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const[error,setError]=useState(null);
  const[loading,setLoading]=useState(true);

  useEffect(()=> {
    const loadPopularMovies = async () => {
      try{
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch(err){
        setError("Failed to load popular movies.");
      }
      finally{
        setLoading(false)
      }
    }
    loadPopularMovies();
  },[])

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
