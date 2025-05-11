import '../css/Favorites.css';
import '../css/Home.css';
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MoviesContext";

function Favorites() {

    const { favorites } = useMovieContext();
  
  return (
    <div>
        {favorites.length === 0 ? (
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>Start adding movies to your favorites and they will appear here!</p>
        </div>): (
        <div className="movies-grid">
          {favorites.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;