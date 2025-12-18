function MovieCard({movie}){
    function OnFvrtClick(){

        alert(`You have added ${movie.title} to your favourites!`);
    }
    return(
        <>
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
            </div>
            <div class="movie-overlay">
                <button className="fvrt-btn" onClick={OnFvrtClick}>💌</button>
            </div>
        </div>
        <div className="movie-info">
        <h3>{movie.title}</h3>
        <h3>{movie.release_date}</h3>
        
        </div>
        
        </>
    );

}
export default MovieCard;