import '../css/MovieCard.css';
import { useMovieContext } from "../contexts/MoviesContext";


function MovieCard({movie}){

    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e){
        //alert("clicked")
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return(<>
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overplay">
                    <button className={`favorite-btn  ${favorite ? 'favorited' : ''}`} onClick={onFavoriteClick}>
                    {favorite ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    </>);
}

/*
MovieCard.defaultProps = {
    url : "./bb.jpeg",
    title: "Guess",
    release_date: "Date de sortie"
}

MovieCard.propTypes = {
    url: PropTypes.string,
    title : PropTypes.string,
    release_date : PropTypes.string

}*/



export default MovieCard;