import "../css/MovieCard.css";
function MovieCard({ movie }) {
  function OnFvrtClick() {
    alert(`You have added ${movie.title} to your favourites!`);
  }

  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="movie-overlay">
          <button className="fvrt-btn" onClick={OnFvrtClick}>
            💌
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <h3>{movie.release_date?.split("-")[0]}</h3>
      </div>
    </>
  );
}
export default MovieCard;
