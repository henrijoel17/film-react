import MovieCard from "../components/MovieCard";
import { useState } from "react";
import '../css/Home.css'

function Home(){

    const [searchQuery,setSearchQuery] = useState(""); 
    
    
    /*const [movies,setMovies] = useState([]);

    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        
        const loadPopularMovies = async () =>{
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }catch (err){
                console.log(err)
                setError("Erreur de chargement ...")
            }finally{
                setLoading(false)
            }
        }
        
        loadPopularMovies();

    },[]);*/

    /* const movies = getPopularMovies();*/


    const movies = [
        {id : 1,title : "Titanic", release_date: "2020",url:"./public/titanic.jpeg"},
        {id : 2,title : "Avengers", release_date: "2021",url:"./public/avengers.jpeg"},
        {id : 3,title : "John Wick", release_date: "2012",url:"./public/jw.jpeg"},
        {id : 4,title : "Terminator", release_date: "2018",url:"./public/terminator.jpeg"},
        {id:5,title:"One Piece",release_date:"1999",url : "./public/bb.jpeg"}
    ]

    function handleSearch(e){
        e.preventDefault();
        alert(searchQuery)
        setSearchQuery("");
    }

    return(<>

        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input"
            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="home">
            <div className="movies-grid">
                {movies.map((movie) => 
                movie.title.toLowerCase().startsWith(searchQuery) 
                 && (<MovieCard movie={movie} key={movie.id}/>))}
            </div>
        </div>
    </>);
}

export default Home;